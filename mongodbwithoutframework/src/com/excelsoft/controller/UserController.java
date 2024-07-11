package com.excelsoft.controller;

import com.excelsoft.dto.UserDto;
import com.excelsoft.service.UserService;

import java.util.Scanner;

public class UserController {

    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);

        System.out.println("Choose a option");
        System.out.println("1 : Insert");
        System.out.println("2 : Get User Details");
        System.out.println("3 : Update");
        System.out.println("4 : Delete");

        int choice = sc.nextInt();

        switch(choice){
            case 1:
                UserDto dto = new UserDto();

                System.out.println("Enter the User Id");
                dto.setId(sc.nextInt());
                System.out.println("Enter the User Name");
                dto.setName(sc.next());
                System.out.println("Enter the User Email");
                dto.setEmail(sc.next());
                System.out.println("Enter the User Password");
                dto.setPassword(sc.next());
                sc.close();

                UserService service = new UserService();
                service.insertUser(service.insertUser(dto));
                break;

                case 2:
                    System.out.println("Enter User Id");
                    int id = sc.nextInt();

                    UserService serviced = new UserService();
                    UserDto user = serviced.getUserById(id);

                    if(user != null){
                        System.out.println("User Details");
                        System.out.println("Id:" + user.getId());
                        System.out.println("Name:" + user.getName());
                        System.out.println("Email:" + user.getEmail());
                        System.out.println("Password:" + user.getPassword());
            }else {
                        System.out.println("User not found");
                    }
                    break;
        }
    }
}
