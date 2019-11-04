// Copyright 2018 The Flutter team. All rights reserved.
// Use of this source code is governed by a BSD-style license that can be
// found in the LICENSE file.

import 'package:flutter/material.dart';
import 'dart:convert'; // Para leituras de JSON
import 'lendoJSON.dart';
import 'widgets.dart';
import 'package:flutter/services.dart';
import 'tela2.dart';
import 'pegandoJSONCodigo.dart';
import 'constants.dart';

class MyHomePage extends StatefulWidget {

  @override
  _tela1 createState() => _tela1();
}

class _tela1 extends State < MyHomePage > {

  @override
  void initState() {
    super.initState();
    SystemChrome.setEnabledSystemUIOverlays(SystemUiOverlay.values);
  }

  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(APP_NAME),
      ),
      body: Center(
        //Conteudo

        child: RaisedButton(
          child: Text('Open route'),
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => MyApp()),
            );
          },
        ),


        //Fim do conteudo
      ),
    );
  }
}