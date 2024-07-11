package com.excelsoft.controller;

import com.excelsoft.dto.UserDto;
import com.excelsoft.service.UserService;

import java.util.Scanner;

public class UserController {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Welcome to Student Application");
        System.out.println("Please Choose an option");
        System.out.println("1 : Insert");
        System.out.println("2 : Get User Details");
        System.out.println("3 : Update");
        System.out.println("4 : Delete");

        int choice = sc.nextInt();

        switch(choice){
            case 1: {
                UserDto dto = new UserDto();

                System.out.println("Enter the Student Id");
                dto.setId(sc.nextInt());
                System.out.println("Enter the Student Name");
                dto.setName(sc.next());
                System.out.println("Enter the Student Email");
                dto.setEmail(sc.next());
                System.out.println("Enter the Student Password");
                dto.setPassword(sc.next());
                sc.close();

                UserService service = new UserService();
                service.insertUser(service.insertUser(dto));
            }
        }
    }
}
