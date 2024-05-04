package com.thdat.quizapp.controller;


import com.thdat.quizapp.model.Question;
import com.thdat.quizapp.model.QuestionWrapper;
import com.thdat.quizapp.model.QuizWrapper;
import com.thdat.quizapp.model.Response;
import com.thdat.quizapp.service.QuizService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Random;

@CrossOrigin("*")
@RestController
@RequestMapping("quiz")

public class QuizController {

    @Autowired
    QuizService quizService;

    @PostMapping("create")
    public ResponseEntity<String> createQuiz(@RequestParam String category, @RequestParam int numQ, @RequestParam String title){
        return quizService.createQuiz(category, numQ, title);
    }

    @GetMapping("get/{id}")
    public ResponseEntity<List<QuestionWrapper>> getQuizQuestions(@PathVariable Integer id){
        return quizService.getQuizQuestions(id);
    }

    @GetMapping("get")
    public ResponseEntity<List<QuizWrapper>> getQuiz(){
        Random random = new Random();
        int id = random.nextInt(23) + 1;
        if (id == 5) id = id + 1;
        return quizService.getQuiz(id);
    }

    @PostMapping("submit/{id}")
    public ResponseEntity<Integer> submitQuiz(@PathVariable Integer id, @RequestBody List<Response> response){
        return quizService.calculateResult(id, response);
    }

}
