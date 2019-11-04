// Copyright 2018 The Flutter team. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'package:flutter/material.dart';
import 'dart:convert'; // Para leituras de JSON
import 'lendoJSON.dart';
import 'widgets.dart';
import 'constants.dart';

void main() => runApp(MyApp(post: fetchPost())); // Possível dependencia para leitura -> post: fetchPost()
class MyApp extends StatelessWidget { // Possível dep..
  final Future<Post> post; // Possível dep...
  MyApp({Key key, this.post}) : super(key: key); // Possível dep..
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Obtendo dados da Web - Exemplo',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: Scaffold(
        appBar: AppBar(
          title: Text('Pegando dados da Web'),
        ),
        body: Center(

        	// Conteúdo
        	
      
    child: FutureBuilder<Post>(
            future: post,
            builder: (context, snapshot) {
              if (snapshot.hasData) {
                return Padding(
                  padding: const EdgeInsets.all(8.0),
                  child: Text('Id :' + snapshot.data.id.toString() + '\n\ntitle : ' 
+ snapshot.data.title + '\n\nbody : ' + snapshot.data.body),
                );
              } else if (snapshot.hasError) {
                return Text("${snapshot.error}");
              }
              return CircularProgressIndicator();
            },
          ),
        	//
          
        ),
      ),
    );
  }
}