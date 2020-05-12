import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'tela2.dart';
import 'jsonleitura.dart';

import 'constants.dart';


void main() {
  runApp(new MyApp());
}
class MyApp extends StatelessWidget {

  @override
  Widget build(BuildContext context) {
    return new MaterialApp(
      title: 'Generated App',
      theme: new ThemeData(
        primarySwatch: Colors.blue,
        primaryColor: const Color(0xFF2196f3),
        accentColor: const Color(0xFF2196f3),
        canvasColor: const Color(0xFFfafafa),
      ),
      home: new MyHomePage(),
    );
  }
}

class MyHomePage extends StatefulWidget {
  MyHomePage({Key key}) : super(key: key);
  @override
  _MyHomePageState createState() => new _MyHomePageState();
}

class _MyHomePageState extends State<MyHomePage> {
    @override
    Widget build(BuildContext context) {
      return new Scaffold(
        appBar: new AppBar(
          title: new Text('App Name'),
          ),
        body:
          new Column(
            mainAxisAlignment: MainAxisAlignment.start,
            mainAxisSize: MainAxisSize.max,
            crossAxisAlignment: CrossAxisAlignment.center,
            children: <Widget>[
              new RaisedButton(key:null, onPressed:
              
              // Ação do botão
              () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => SecondRoute()),
            );
          },

              // fim da ação do botão


                color: const Color(0xFFe0e0e0),
                child:
                  new Text(
                  "BUTTON 1",
                    style: new TextStyle(fontSize:12.0,
                    color: const Color(0xFF000000),
                    fontWeight: FontWeight.w200,
                    fontFamily: "Roboto"),
                  )
                ),
    
              new RaisedButton(key:null, onPressed:

              // Ação do botão
                      () {
                    Navigator.push(
                      context,
                      MaterialPageRoute(builder: (context) => jsonleitura()),
                    );
                  },

              // fim da ação do botão

                color: const Color(0xFFe0e0e0),
                child:
                  new Text(
                  "BUTTON 2",
                    style: new TextStyle(fontSize:12.0,
                    color: const Color(0xFF000000),
                    fontWeight: FontWeight.w200,
                    fontFamily: "Roboto"),
                  )
                )
            ]
    
          ),
    
      );
    }
    void buttonPressed(){}
    
}


/*

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
        child: RaisedButton(
          child: Text('Abrir caminho'),
          onPressed: () {
            Navigator.push(
              context,
              MaterialPageRoute(builder: (context) => SecondRoute()),
            );
          },
        ),
      ),
    );
  }
}*/