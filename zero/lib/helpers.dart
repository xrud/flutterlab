import 'dart:async';
import 'dart:convert';
import 'package:flutter/material.dart';
import 'package:http/http.dart' as http; // Não esquecer de adicionar http: 0.12.0+2  no arquivo pubspec.yaml
Future<Post> fetchPost() async {
  final response = await http.get('https://jsonplaceholder.typicode.com/posts/2');
  if (response.statusCode == 200) {
    return Post.fromJson(json.decode(response.body));
  } else {
    throw Exception('Falha ao carregar um post');
  }
}
class Post {
  final int userId;
  final int id;
  final String title;
  final String body;
  Post({this.userId, this.id, this.title, this.body});
  factory Post.fromJson(Map<String, dynamic> json) {
    return Post(
      userId: json['userId'],
      id: json['id'],
      title: json['title'],
      body: json['body'],
    );
  }
}