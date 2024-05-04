package com.thdat.quizapp.controller;


import com.thdat.quizapp.model.Question;
import com.thdat.quizapp.service.QuestionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@CrossOrigin("*")
@RestController
@RequestMapping("question")
public class QuestionController {

    @Autowired
    QuestionService questionService;
    @GetMapping("allQuestions")
    public ResponseEntity<List<Question>> getAllQuestion(){
        return questionService.getAllQuestions();
    }

    @GetMapping("category/{category}")
    public ResponseEntity<List<Question>> getQuestionsByCategory(@PathVariable String category){
        return questionService.getQuestionsByCategory(category);
    }

    @GetMapping("id/{id}")
    public Optional<Question> getQuestionsById(@PathVariable Integer id){
        return questionService.getQuestionsById(id);
    }

    @GetMapping("option/{option1}")
    public List<Question> getQuestionsByOption1(@PathVariable String option1){
        return questionService.getQuestionByOption1(option1);
    }


    @PostMapping("add")
    public ResponseEntity<String> addQuestion(@RequestBody Question question){

        return questionService.addQuestion(question);
    }

}
