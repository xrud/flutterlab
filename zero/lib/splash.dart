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
import 'home.dart';

class Splash extends StatefulWidget {
  @override
  _SplashState createState() => _SplashState();
}

class _SplashState extends State<Splash> {

  @override
  void initState() {
    super.initState();
    SystemChrome.setEnabledSystemUIOverlays([]);
    Future.delayed(Duration(seconds: 4)).then((_){
      Navigator.pushReplacement(context, MaterialPageRoute(builder: (context)=>TelaWeb()));
    });
  }

  @override
  Widget build(BuildContext context) {

    return Container(
            color: Colors.blue,
            child: Center(
              child: Container(
                width: 150,
                height: 150,
                child: Image.asset("imgs/icon.png"),
              ),
            )
        );
  }
}