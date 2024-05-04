package com.thdat.quizapp.dao;

import com.thdat.quizapp.model.Question;
import com.thdat.quizapp.model.Quiz;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.List;
import java.util.Optional;

public interface QuizDao extends JpaRepository<Quiz, Integer> {

}
