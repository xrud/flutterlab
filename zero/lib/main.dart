// Copyright 2018 The Flutter team. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'package:flutter/material.dart';
import 'dart:convert'; // Para leituras de JSON
import 'lendoJSON.dart';

void main() => runApp(TelaWeb(post: fetchPost()));
class TelaWeb extends StatelessWidget {
  final Future<Post> post;
  TelaWeb({Key key, this.post}) : super(key: key);
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
          
      
    child: 

    FutureBuilder<Post>(
  future: fetchPost(),
  builder: (context, snapshot) {
    if (snapshot.hasData) {
      return Text('Id :' + snapshot.data.id.toString() + '\n\ntitle : ' + 
              snapshot.data.title + '\n\nbody : ' + snapshot.data.body);
    } else if (snapshot.hasError) {
      return Text("${snapshot.error}");
    }
    // exibe um spinner carregando 
    return CircularProgressIndicator();
  },
)
          //
          
        ),
      ),
    );
  }
}