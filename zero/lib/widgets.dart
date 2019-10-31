import 'package:flutter/material.dart';


Widget helloWorld() {
  return Text(
    "Hello, Flutter!",
  );
}

Widget padding() {
      return Padding(
        padding: EdgeInsets.all(16.0),
        child: Text(
          "Hello, Flutter!",
        ),
      );
    }


Widget caixaDeTexto(texto, tamanho) {
  return Text(
    "Hello, Flutter!",
    style: TextStyle(
        fontSize: 30.0
    ),
  );
}

Widget botao(texto) {
  return RaisedButton(
    child: const Text('Button'),
    color: Colors.blue,
    elevation: 4.0,
    splashColor: Colors.yellow,
    onPressed: () {
       //do something
    },
  );
}

Widget flatBotao() {
  return FlatButton(
    child: const Text('Button'),
    splashColor: Colors.green,
    onPressed: () {
       //do something
    },
  );
}



Widget tabela() {
  return ListView.builder(
    padding: EdgeInsets.all(16.0),
  //   spacing of the rows
    itemExtent: 30.0,
 //    provides an infinite list
    itemBuilder: (BuildContext context, int index) {
      return Text('Row $index');
    },
  );
}

