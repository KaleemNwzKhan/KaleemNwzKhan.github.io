// based on the original typograms code from https://github.com/google/typograms/blob/main/src/typograms.js
// only moved the css to its own file (_sass/_typograms.scss) and commented the last line of the file
var ratio = 2;

function grid(width, height) {
  var result = document.createElementNS("http://www.w3.org/2000/svg", "g");

  var vertical = document.createElementNS("http://www.w3.org/2000/svg", "line");
  vertical.setAttribute("x1", 15);
  vertical.setAttribute("y1", 0);
  vertical.setAttribute("x2", 15);
  vertical.setAttribute("y2", 54);
  vertical.setAttribute("class", "center");
  //result.appendChild(vertical);

  var horizontal = document.createElementNS("http://www.w3.org/2000/svg", "line");
  horizontal.setAttribute("x1", 0);
  horizontal.setAttribute("y1", 30);
  horizontal.setAttribute("x2", 30);
  horizontal.setAttribute("y2", 54);
  horizontal.setAttribute("class", "center");
  //result.appendChild(horizontal);

  for (var i = 0; i <= width * 30; i += 3) {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", i);
    line.setAttribute("y1", 0);
    line.setAttribute("x2", i);
    line.setAttribute("y2", 54 * height);
    line.setAttribute("class", "grid");
    result.appendChild(line);
  }

  for (var i = 0; i <= height * 54; i += 3) {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", 0);
    line.setAttribute("y1", i);
    line.setAttribute("x2", 30 * width);
    line.setAttribute("y2", i);
    line.setAttribute("class", "grid");
    result.appendChild(line);
  }

  return result;
}

var glyphs = {};

glyphs["|"] = ([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) => {
  var result = document.createElementNS("http://www.w3.org/2000/svg", "g");
  if (right == "_") {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", "18");
    line.setAttribute("y1", "51");
    line.setAttribute("x2", "30");
    line.setAttribute("y2", "51");
    line.setAttribute("class", "part");
    result.appendChild(line);
  }
  if (left == "_") {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", "0");
    line.setAttribute("y1", "51");
    line.setAttribute("x2", "12");
    line.setAttribute("y2", "51");
    line.setAttribute("class", "part");
    result.appendChild(line);
  }
  if (topRight == "_") {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", "12");
    line.setAttribute("y1", "-3");
    line.setAttribute("x2", "30");
    line.setAttribute("y2", "-3");
    line.setAttribute("class", "part");
    result.appendChild(line);
  }
  if (topLeft == "_") {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", "0");
    line.setAttribute("y1", "-3");
    line.setAttribute("x2", "18");
    line.setAttribute("y2", "-3");
    line.setAttribute("class", "part");
    result.appendChild(line);
  }
  // var leg =  && ;
  // var head =  && ;
  //console.log(!(bottomLeft == "/" && bottomRight == "\\"));
  //console.log(!(topRight == "/" && topLeft == "\\"));
  result.appendChild(
    cross([
      !(topRight == "/" && topLeft == "\\"), // top
      ["-"].includes(right), // right
      !(bottomLeft == "/" && bottomRight == "\\"), // bottom
      ["-"].includes(left), // left
      topRight == "/", // topRight
      bottomRight == "\\", // bottomRight
      bottomLeft == "/", // bottomLeft
      topLeft == "\\", // topLeft
    ])
  );
  return result;
};

glyphs["-"] = ([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) => {
  return cross([
    ["|"].includes(top), // top
    true, // right
    ["|"].includes(bottom), // bottom
    true, // left
    false, // topRight
    false, // bottomRight
    false, // bottomLeft
    false, // topLeft
  ]);
};

glyphs["~"] = ([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) => {
  var result = document.createElementNS("http://www.w3.org/2000/svg", "g");
  var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", "9");
  line.setAttribute("y1", "27");
  line.setAttribute("x2", "24");
  line.setAttribute("y2", "27");
  line.setAttribute("class", "part");
  result.appendChild(line);
  return result;
};

glyphs["_"] = (around) => {
  var line = glyphs["-"](around);
  line.setAttribute("transform", "translate(0 24)");
  return line;
};

glyphs[":"] = ([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) => {
  var result = document.createElementNS("http://www.w3.org/2000/svg", "g");
  var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
  line.setAttribute("x1", "15");
  line.setAttribute("y1", "0");
  line.setAttribute("x2", "15");
  line.setAttribute("y2", "60");
  line.setAttribute("class", "part");
  line.setAttribute("style", "stroke-dasharray: 15; stroke-dashoffset: 0;");
  result.appendChild(line);
  if (top == "+") {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", "15");
    line.setAttribute("y1", "-24");
    line.setAttribute("x2", "15");
    line.setAttribute("y2", "-15");
    line.setAttribute("class", "part");
    result.appendChild(line);
  }
  if (bottom == "+") {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", "15");
    line.setAttribute("y1", "60");
    line.setAttribute("x2", "15");
    line.setAttribute("y2", "78");
    line.setAttribute("class", "part");
    result.appendChild(line);
  }
  return result;
};

glyphs["="] = (around) => {
  var result = document.createElementNS("http://www.w3.org/2000/svg", "g");
  var first = document.createElementNS("http://www.w3.org/2000/svg", "line");
  first.setAttribute("x1", "0");
  first.setAttribute("y1", "21");
  first.setAttribute("x2", "30");
  first.setAttribute("y2", "21");
  first.setAttribute("class", "part");
  result.appendChild(first);
  var second = document.createElementNS("http://www.w3.org/2000/svg", "line");
  second.setAttribute("x1", "0");
  second.setAttribute("y1", "30");
  second.setAttribute("x2", "30");
  second.setAttribute("y2", "30");
  second.setAttribute("class", "part");
  result.appendChild(second);
  return result;
};

glyphs["*"] = ([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) => {
  var result = document.createElementNS("http://www.w3.org/2000/svg", "g");
  var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", "0");
  circle.setAttribute("cy", "0");
  circle.setAttribute("r", "21");
  circle.setAttribute("stroke", "none");
  circle.setAttribute("transform", "translate(15, 27)");
  result.appendChild(circle);

  result.appendChild(
    cross([
      ["+", "|"].includes(top),
      ["+", "-"].includes(right),
      ["+", "|"].includes(bottom),
      ["+", "-"].includes(left),
      ["/"].includes(topRight),
      ["\\"].includes(bottomRight),
      ["/"].includes(bottomLeft),
      ["\\"].includes(topLeft),
    ])
  );

  return result;
};

glyphs["o"] = ([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) => {
  var result = document.createElementNS("http://www.w3.org/2000/svg", "g");
  var circle = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  circle.setAttribute("cx", "0");
  circle.setAttribute("cy", "0");
  circle.setAttribute("r", "18");
  circle.setAttribute("stroke-width", "6");
  circle.setAttribute("fill", "none");
  circle.setAttribute("stroke", "var(--global-text-color)");
  circle.setAttribute("transform", "translate(15, 27)");
  result.appendChild(circle);

  var connectors = cross([
    ["+", "|"].includes(top),
    ["+", "-"].includes(right),
    ["+", "|"].includes(bottom),
    ["+", "-"].includes(left),
    ["/"].includes(topRight),
    ["\\"].includes(bottomRight),
    ["/"].includes(bottomLeft),
    ["\\"].includes(topLeft),
  ]);

  result.appendChild(connectors);

  var inner = document.createElementNS("http://www.w3.org/2000/svg", "circle");
  inner.setAttribute("cx", "0");
  inner.setAttribute("cy", "0");
  inner.setAttribute("r", "15");
  inner.setAttribute("fill", "white");
  inner.setAttribute("opacity", "100%");
  inner.setAttribute("transform", "translate(15, 27)");
  result.appendChild(inner);

  return result;
};

glyphs["/"] = (around) => {
  var [top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft] = around;
  var result = document.createElementNS("http://www.w3.org/2000/svg", "g");
  result.appendChild(
    cross([
      ["|"].includes(top), // top
      false, // right
      ["|"].includes(bottom), // bottom
      false, // left
      true, // topRight
      false, // bottomRight
      true, // bottomLeft
      false, // topLeft
    ])
  );
  if (right == "\\") {
    var tip = cross([
      false,
      false,
      false,
      false,
      false,
      false,
      true, // bottomLeft
      false,
    ]);
    tip.setAttribute("transform", "translate(30 -54)");
    tip.setAttribute("clip-path", "polygon(-3 0, 0 0, 0 54, -3 54)");
    result.appendChild(tip);
  }
  if (left == "\\") {
    var tip = cross([
      false,
      false,
      false,
      false,
      true, // topRight
      false,
      false, // bottomLeft
      false,
    ]);
    tip.setAttribute("transform", "translate(-30 54)");
    tip.setAttribute("clip-path", "polygon(15 -6, 33 -6, 33 6, 15 6)");
    result.appendChild(tip);
  }

  if (right == "_") {
    var line = glyphs["_"](around);
    result.appendChild(line);
  }

  return result;
};

glyphs["\\"] = (around) => {
  var [top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft] = around;
  var result = document.createElementNS("http://www.w3.org/2000/svg", "g");
  result.appendChild(
    cross([
      ["|"].includes(top), // top
      false, // right
      ["|"].includes(bottom), // bottom
      false, // left
      false, // topRight
      true, // bottomRight
      false, // bottomLeft
      true, // topLeft
    ])
  );
  if (left == "/") {
    var tip = cross([
      false,
      false,
      false,
      false,
      false,
      true, // bottomRight
      false,
      false,
    ]);
    tip.setAttribute("transform", "translate(-30 -54)");
    tip.setAttribute("clip-path", "polygon(15 0, 30 0, 30 54, 15 54)");
    result.appendChild(tip);
  }
  if (right == "/") {
    var tip = cross([false, false, false, false, false, false, false, true]);
    tip.setAttribute("transform", "translate(30 54)");
    tip.setAttribute("clip-path", "polygon(-3 0, 0 0, 0 6, -3 6)");
    result.appendChild(tip);
  }

  if (left == "_") {
    var line = glyphs["_"](around);
    result.appendChild(line);
  }

  return result;
};

glyphs["#"] = ([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) => {
  var result = document.createElementNS("http://www.w3.org/2000/svg", "g");
  var polygon = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  var points = [
    [0, 0],
    [42, 0],
    [42, 42],
    [0, 42],
  ];
  polygon.setAttribute("points", points.map(([x, y]) => `${x},${y}`).join(" "));
  polygon.setAttribute("transform", "translate(-6, 6)");
  result.appendChild(polygon);

  result.appendChild(
    cross([
      ["+", "|"].includes(top),
      ["+", "-"].includes(right),
      ["+", "|"].includes(bottom),
      ["+", "-"].includes(left),
      ["/"].includes(topRight),
      ["\\"].includes(bottomRight),
      ["/"].includes(bottomLeft),
      ["\\"].includes(topLeft),
    ])
  );

  return result;
};

glyphs["+"] = ([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) => {
  var result = document.createElementNS("http://www.w3.org/2000/svg", "g");
  var r = ["*", "#", "-", "+", "~", ">", ".", "'", "`"].includes(right);
  var l = ["*", "#", "-", "+", "~", "<", ".", "'", "`"].includes(left);
  var t = ["*", "#", "|", "+", ".", "`", "^"].includes(top);
  var b = ["*", "#", "|", "+", "'", "`", "v"].includes(bottom);
  var tR = ["/", "*", "#"].includes(topRight);
  var bR = ["\\", "*", "#"].includes(bottomRight);
  var tL = ["\\", "*", "#"].includes(topLeft);
  var bL = ["/", "*", "#"].includes(bottomLeft);

  // cross
  result.appendChild(cross([t, r, b, l, tR, bR, bL, tL]));

  // center
  if ((l || r) && (b || t)) {
    var center = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
    center.setAttribute("points", "0,0 6,0 6,6 0,6");
    center.setAttribute("transform", "translate(-3 -3) translate(15 27)");
    result.appendChild(center);
  }

  // tip
  if (tR || tL) {
    var center = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      false, // topRight
      tL, // bottomRight
      tR, // bottomLeft
      false, // topLeft
    ]);
    center.setAttribute("clip-path", "polygon(0 -3, 30 -3, 30 0, 0 0)");
    result.appendChild(center);
  }

  if (bR || bL) {
    var center = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      bL, // topRight
      false, // bottomRight
      false, // bottomLeft
      bR, // topLeft
    ]);
    center.setAttribute("clip-path", "polygon(0 27, 15 27, 15 30, 0 30)");
    result.appendChild(center);
  }

  if (bL || tL) {
    var center = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      bL && bR, // topRight
      tL && tR, // bottomRight
      false, // bottomLeft
      false, // topLeft
    ]);
    center.setAttribute("clip-path", "polygon(-3 0, 0 0, 0 54, -3 54)");
    result.appendChild(center);
  }

  if (bR || tR) {
    var center = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      false, // topRight
      false, // bottomRight
      tR && tL, // bottomLeft
      bR && bL, // topLeft
    ]);
    //console.log(center);
    center.setAttribute("clip-path", "polygon(15 0, 30 0, 30 54, 15 54)");
    result.appendChild(center);
  }

  if (r || l) {
    var center = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      r || bL, // topRight
      tL, // bottomRight
      tR, // bottomLeft
      l || bR, // topLeft
    ]);
    center.setAttribute("clip-path", "polygon(-3 24, 30 24, 30 30, -3 30)");
    result.appendChild(center);
  }
  return result;
};

glyphs["."] = ([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) => {
  var result = document.createElementNS("http://www.w3.org/2000/svg", "g");

  // top-right
  if ((right == "-" || right == "+") && (bottom == "|" || bottom == "'" || bottom == "`" || bottom == "+")) {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 30 24
        A 18 18, 0, 0, 0, 12 42
        L 12 54
        L 18 54
        L 18 42
        A 12 12, 0, 0, 1, 30 30
        Z`
    );
    result.appendChild(path);
  }

  // top-left
  if ((left == "-" || left == "+") && (bottom == "|" || bottom == "'" || bottom == "`" || bottom == "+")) {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 0 24
        A 18 18, 0, 0, 1, 18 42
        L 18 54
        L 12 54
        L 12 42
        A 12 12, 0, 0, 0, 0 30
        Z`
    );
    result.appendChild(path);
  }

  // top-right
  if ((right == "-" || right == "+") && (top == "|" || top == "." || top == "+")) {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 30 30
        A 18 18, 0, 0, 1, 12 12
        L 12 0
        L 18 0
        L 18 12
        A 12 12, 0, 0, 0, 30 24
        Z`
    );
    result.appendChild(path);
  }

  // bottom-left
  if ((left == "-" || left == "+") && (top == "|" || top == "." || top == "+")) {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 0 30
        A 18 18, 0, 0, 0, 18 12
        L 18 0
        L 12 0
        L 12 12
        A 12 12, 0, 0, 1, 0 24
        Z`
    );
    result.appendChild(path);
  }

  // bottom right-topRight
  if (right == "-" && topRight == "/") {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 30 30
        A 12 12, 0, 0, 1, 18 18
        L 18 15
        L 24 15
        L 24 18
        A 6 6, 0, 0, 0, 30 24
        Z`
    );
    result.appendChild(path);
    var line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      true, // topRight
      false, // bottomRight
      false, // bottomLeft
      false, // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(15px -10px, 30px -10px, 30px 30px, 2px 15px)");
    result.appendChild(line);
  }

  // right-topLeft
  if (right == "-" && topLeft == "\\") {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M -3 0
        A 60 60, 0, 0, 0, 30 30
        L 30 24
        A 60 60, 0, 0, 1, 0 -6
        Z`
    );
    result.appendChild(path);
  }

  // left-topRight
  if (left == "-" && topRight == "/") {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 0 30
        A 60 60, 0, 0, 0, 33 0
        L 30 -6
        A 60 60, 0, 0, 1, 0 24
        Z`
    );
    result.appendChild(path);
  }

  // bottom left-topLeft
  if (left == "-" && topLeft == "\\") {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 0 30
        A 12 12, 0, 0, 0, 12 18
        L 12 15
        L 6 15
        L 6 18
        A 6 6, 0, 0, 1, 0 24
        Z`
    );
    result.appendChild(path);
    var line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      false, // topRight
      false, // bottomRight
      false, // bottomLeft
      true, // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(-3 -3, 12 -3, 12 18, -3 18)");
    result.appendChild(line);
  }

  // bottom-topRight
  if (bottom == "|" && topRight == "/") {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 12 54
        A 120 120, 0, 0, 1, 30 -6
        L 37 -6
        A 120 120, 0, 0, 0, 18 54
        Z`
    );
    result.appendChild(path);
  }

  // top-bottomRight
  if (top == "|" && bottomRight == "\\") {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 30 60
        A 120 120, 0, 0, 1, 12 0
        L 18 0
        A 120 120, 0, 0, 0, 37 60
        Z`
    );
    result.appendChild(path);
  }

  // top-bottomLeft
  if (top == "|" && bottomLeft == "/") {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 0 60
        A 120 120, 0, 0, 0, 18 0
        L 12 0
        A 120 120, 0, 0, 1, -7 60
        Z`
    );
    result.appendChild(path);
  }

  // bottom-topLeft
  if (bottom == "|" && topLeft == "\\") {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 12 54
        A 120 120, 0, 0, 0, -7 -6
        L 0 -6
        A 120 120, 0, 0, 1, 18 54
        Z`
    );
    result.appendChild(path);
  }

  // right-bottomLeft
  if (right == "-" && bottomLeft == "/") {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 0 48
        A 42 42, 0, 0, 1, 30 24
        L 30 30
        A 42 42, 0, 0, 0, 6 48
        Z`
    );
    result.appendChild(path);
    var line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      false, // topRight
      false, // bottomRight
      true, // bottomLeft
      false, // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(-3 15, 12 15, 12 30, -3 30)");
    result.appendChild(line);
  }

  // left-bottomRight
  if (left == "-" && bottomRight == "\\") {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 0 24
        A 42 42, 0, 0, 1, 30 48
        L 24 48
        A 42 42, 0, 0, 0, 0 30
        Z`
    );

    result.appendChild(path);
    var line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      false, // topRight
      true, // bottomRight
      false, // bottomLeft
      false, // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(-3 15, 12 15, 21 30, -3 30)");
    result.appendChild(line);
  }

  // left-bottomLeft
  if (left == "-" && bottomLeft == "/") {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 0 24
        A 12 12, 0, 0, 1, 12 39
        L 6 39
        A 6 6, 0, 0, 0, 0 30
        Z`
    );
    result.appendChild(path);
    var line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      false, // topRight
      false, // bottomRight
      true, // bottomLeft
      false, // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(-3 6, 12 6, 12 30, -3 30)");
    result.appendChild(line);
  }

  // right-bottomRight
  if (right == "-" && bottomRight == "\\") {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 30 24
        A 12 12, 0, 0, 0, 18 39
        L 24 39
        A 6 6, 0, 0, 1, 30 30
        Z`
    );
    result.appendChild(path);
    var line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      false, // topRight
      true, // bottomRight
      false, // bottomLeft
      false, // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(3 6, 18 6, 18 30, 3 30)");
    result.appendChild(line);
  }

  // bottomLeft-bottomRight
  if (bottomLeft == "/" && bottomRight == "\\") {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 3 42
        A 15 15, 0, 0, 1, 27 42
        L 25 51
        A 9 9, 0, 0, 0, 5 51
        Z`
    );
    result.appendChild(path);
    var line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      false, // topRight
      true, // bottomRight
      true, // bottomLeft
      false, // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(-3 15, 33 15, 33 30, -3 30)");
    result.appendChild(line);
  }

  // topLeft-topRight
  if (topLeft == "\\" && topRight == "/") {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 3 12
        A 15 15, 0, 0, 0, 27 12
        L 22 9
        A 9 9, 0, 0, 1, 8 9
        Z`
    );
    result.appendChild(path);
    var line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      true, // topRight
      false, // bottomRight
      false, // bottomLeft
      true, // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(-3 -3, 33 -3, 33 12, -3 12)");
    result.appendChild(line);
  }

  // topRight-bottomRight
  if (topRight == "/" && bottomRight == "\\") {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 22 9
        A 30 30, 0, 0, 0, 22 45
        L 28 45
        A 30 30, 0, 0, 1, 28 9
        Z`
    );
    result.appendChild(path);
    var line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      true, // topRight
      true, // bottomRight
      false, // bottomLeft
      false, // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(6 -3, 33 -3, 33 57, 6 57)");
    result.appendChild(line);
  }

  // topLeft-bottomLeft
  if (topLeft == "\\" && bottomLeft == "/") {
    var path = document.createElementNS("http://www.w3.org/2000/svg", "path");
    path.setAttribute(
      "d",
      `
        M 8 9
        A 30 30, 0, 0, 1, 8 45
        L 2 45
        A 30 30, 0, 0, 0, 2 9
        Z`
    );
    result.appendChild(path);
    var line = cross([
      false, // top
      false, // right
      false, // bottom
      false, // left
      false, // topRight
      false, // bottomRight
      true, // bottomLeft
      true, // topLeft
    ]);
    line.setAttribute("clip-path", "polygon(-3 -3, 9 -3, 9 57, -3 57)");
    result.appendChild(line);
  }

  return result;
};

var alias = {
  "┌": "+",
  "┐": "+",
  "└": "+",
  "┘": "+",
  "─": "-",
  "►": ">",
  "'": ".",
  "`": ".",
  V: "v",
};

for (var [key, value] of Object.entries(alias)) {
  glyphs[key] = (around) => {
    return glyphs[value](around);
  };
}

glyphs[">"] = ([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) => {
  var result = document.createElementNS("http://www.w3.org/2000/svg", "g");
  var arrow = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  arrow.setAttribute("points", "0,0 42,18 0,36");
  var reach = 0;
  if (right == "*" || right == "o" || right == "#") {
    reach -= 18;
  }
  arrow.setAttribute("transform", `translate(${reach} 9)`);
  result.appendChild(arrow);
  return result;
  var center = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  center.setAttribute("points", "-3,0 6,0 6,6 -3,6");
  center.setAttribute("transform", "translate(15 24)");
  result.appendChild(center);
  result.appendChild(
    cross([
      false, // top
      false, // right
      false, // bottom
      ["-", "+"].includes(left), // left
      false, // topRight
      false, // bottomRight
      ["/"].includes(bottomLeft), // bottomLeft
      ["\\"].includes(topLeft), // topLeft
    ])
  );
  return result;
};

glyphs["<"] = ([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) => {
  var result = document.createElementNS("http://www.w3.org/2000/svg", "g");
  var arrow = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  arrow.setAttribute("points", "0,0 42,18 0,36");
  var reach = 30;
  if (left == "*" || left == "o" || left == "#") {
    reach += 18;
  }
  arrow.setAttribute("transform", `translate(${reach} 9) translate(0 36) rotate(180)`);
  result.appendChild(arrow);
  return result;
  //var center = document.createElementNS(
  //  "http://www.w3.org/2000/svg", "polygon");
  //center.setAttribute("points", "0,0 9,0 9,6 0,6");
  //center.setAttribute("transform", "translate(9 24)");
  //result.appendChild(center);
  result.appendChild(
    cross([
      false, // top
      ["-", "+"].includes(right), // right
      false, // bottom
      false, // left
      ["/"].includes(topRight), // topRight
      ["\\"].includes(bottomRight), // bottomRight
      false, // bottomLeft
      false, // topLeft
    ])
  );
  return result;
};

glyphs["v"] = ([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) => {
  var result = document.createElementNS("http://www.w3.org/2000/svg", "g");
  var arrow = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  arrow.setAttribute("points", "0,0 42,18 0,36");
  var reach = 36;
  if (bottom == " ") {
    reach = 12;
  } else if (bottom == "_") {
    reach += 18;
  } else if (bottom == "*" || bottom == "o" || bottom == "#") {
    reach -= 18;
  }
  if (topRight == "/") {
    arrow.setAttribute("transform", `translate(-36 33) rotate(${90 + 22.5}, 42, 18)`);
  } else if (topLeft == "\\") {
    arrow.setAttribute("transform", `translate(-18 33) rotate(${90 - 22.5}, 42, 18)`);
  } else {
    arrow.setAttribute("transform", `translate(33 ${reach}) rotate(90)`);
  }
  result.appendChild(arrow);
  result.appendChild(
    cross([
      ["|", "+"].includes(top), // top
      false, // right
      ["|", "+"].includes(top), // bottom
      false, // left
      ["/"].includes(topRight), // topRight
      false, // bottomRight
      false, // bottomLeft
      ["\\"].includes(topLeft), // topLeft
    ])
  );
  return result;
};

glyphs["^"] = ([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) => {
  var result = document.createElementNS("http://www.w3.org/2000/svg", "g");
  var arrow = document.createElementNS("http://www.w3.org/2000/svg", "polygon");
  arrow.setAttribute("points", "0,0 42,18 0,36");
  var reach = 42;
  if (top == "-") {
    reach -= 15;
  }
  if (bottomLeft == "/") {
    arrow.setAttribute("transform", `translate(-18 -15) rotate(${-45 - 22.5}, 42, 18)`);
  } else if (bottomRight == "\\") {
    arrow.setAttribute("transform", `translate(-36 -15) rotate(${-90 - 22.5}, 42, 18)`);
  } else {
    arrow.setAttribute("transform", `translate(-3 ${reach}) rotate(-90)`);
  }
  result.appendChild(arrow);
  result.appendChild(
    cross([
      false, // top
      false, // right
      ["+", "|"].includes(bottom), // bottom
      false, // left
      false, // topRight
      ["\\"].includes(bottomRight), // bottomRight
      ["/"].includes(bottomLeft), // bottomLeft
      false, // topLeft
    ])
  );
  return result;
};

function cross([top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft]) {
  var result = document.createElementNS("http://www.w3.org/2000/svg", "g");
  if (top) {
    // {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", 15);
    line.setAttribute("y1", 0);
    line.setAttribute("x2", 15);
    line.setAttribute("y2", 27);
    line.setAttribute("class", "part");
    result.appendChild(line);
  }

  if (right) {
    //{
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", 15);
    line.setAttribute("y1", 27);
    line.setAttribute("x2", 30);
    line.setAttribute("y2", 27);
    line.setAttribute("class", "part");
    result.appendChild(line);
  }

  if (bottom) {
    //{
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", 15);
    line.setAttribute("y1", 27);
    line.setAttribute("x2", 15);
    line.setAttribute("y2", 54);
    line.setAttribute("class", "part");
    result.appendChild(line);
  }

  if (left) {
    //{
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", 0);
    line.setAttribute("y1", 27);
    line.setAttribute("x2", 15);
    line.setAttribute("y2", 27);
    line.setAttribute("class", "part");
    result.appendChild(line);
  }

  var diagonal = document.createElementNS("http://www.w3.org/2000/svg", "polygon");

  diagonal.setAttribute(
    "points",
    [
      [0, 0],
      [20.6, 0],
      [20.6, 3],
      [0, 3],
    ]
      .map(([x, y]) => `${x},${y}`)
      .join(" ")
  );

  if (topRight) {
    //{
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", 30);
    line.setAttribute("y1", 0);
    line.setAttribute("x2", 15);
    line.setAttribute("y2", 27);
    line.setAttribute("class", "part");
    // line.setAttribute("transform", "scale(1, 1)");
    // line.setAttribute("clip-path", "polygon(-6 -6, 15 -6, 15 30, -6 30)");
    // line.setAttribute("stroke-linecap", "square !important");
    result.appendChild(line);
    //var mask = document.createElementNS(
    //  "http://www.w3.org/2000/svg", "polygon");
    //mask.setAttribute("points", "0 0, 15 0, 15 18, 0 18");
    //result.appendChild(mask);
    //console.log("hi");
  }

  if (bottomRight) {
    //{
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", 15);
    line.setAttribute("y1", 27);
    line.setAttribute("x2", 30);
    line.setAttribute("y2", 54);
    line.setAttribute("class", "part");
    result.appendChild(line);
  }

  if (bottomLeft) {
    // {
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", 15);
    line.setAttribute("y1", 27);
    line.setAttribute("x2", 0);
    line.setAttribute("y2", 54);
    line.setAttribute("class", "part");
    result.appendChild(line);
  }

  if (topLeft) {
    //{
    var line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", 0);
    line.setAttribute("y1", 0);
    line.setAttribute("x2", 15);
    line.setAttribute("y2", 27);
    line.setAttribute("class", "part");
    result.appendChild(line);
  }

  return result;
}

function text(char, reserved) {
  var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  var result = document.createElementNS("http://www.w3.org/2000/svg", "text");
  //result.setAttribute("xml:space", "preserve");
  //result.setAttributeNS("http://www.w3.org/XML/1998/namespace", "xml:space", "preserve");
  var value = document.createTextNode(char);
  result.appendChild(value);
  if (reserved) {
    result.setAttribute("class", "reserved");
  }
  var translation = [
    [15, 24],
    //[1.5, 1.5 * ratio]
  ];
  result.setAttribute("transform", translation.map(([x, y]) => `translate(${x}, ${y})`).join(" "));
  g.appendChild(result);
  return g;
}

function render(diagram) {
  var result = document.createElementNS("http://www.w3.org/2000/svg", "g");

  for (var y = 0; y < diagram.length; y++) {
    for (var x = 0; x < diagram[y].length; x++) {
      var char = diagram[y][x];

      if (char == " " || char == '"') {
        continue;
      }

      var reserved = glyphs[char];

      var g = document.createElementNS("http://www.w3.org/2000/svg", "g");

      var str = false;
      for (var i = 0; i < x; i++) {
        if (diagram[y][i] == '"') {
          str = !str;
        }
      }

      var neighbors = around(diagram, [x, y]);

      if (char.match(/[A-Za-z0-9]/)) {
        var [, right, , left] = neighbors;
        // We special case "v", which is a down arrow, and also a text character.
        str = str || left.match(/[A-Za-uw-z0-9]/) || right.match(/[A-Za-uw-z0-9]/);
      }

      reserved = reserved && !str;

      if (reserved) {
        g.appendChild(glyphs[char](neighbors));
      }

      g.appendChild(text(char, reserved));

      g.setAttribute("transform", `translate(${x * 30} ${y * 54})`);
      result.appendChild(g);
    }
  }
  return result;
}

function create(source, zoom, debug) {
  var diagram = source.split("\n").map((line) => line.trimEnd().split(""));

  diagram.shift();
  diagram.splice(-1);

  var width = 0;
  var height = diagram.length;

  for (var y = 0; y < diagram.length; y++) {
    for (var x = 0; x < diagram[y].length; x++) {
      if (diagram[y].length > width) {
        width = diagram[x].length;
      }
    }
  }

  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttribute("width", width * 30 * zoom);
  svg.setAttribute("height", height * 54 * zoom);
  svg.setAttribute("debug", debug);
  var padding = 0;

  svg.setAttribute("viewBox", `${-padding} ${-padding} ${width * 30 + 2 * padding} ${height * 54 + 2 * padding}`);
  svg.setAttribute("class", "debug");
  svg.appendChild(render(diagram));

  if (debug) {
    svg.appendChild(grid(width, height));
  }

  return svg;
}

function around(diagram, [x, y]) {
  var left = " ";
  var top = " ";
  var right = " ";
  var bottom = " ";
  var topRight = " ";
  var bottomRight = " ";
  var bottomLeft = " ";
  var topLeft = " ";
  if (y > 0) {
    top = diagram[y - 1][x] || " ";
  }
  if (x < diagram[y].length - 1) {
    right = diagram[y][x + 1] || " ";
  }
  if (y < diagram.length - 1) {
    bottom = diagram[y + 1][x] || " ";
  }
  if (x > 0) {
    left = diagram[y][x - 1] || " ";
  }
  if (y > 0 && x < diagram[y - 1].length - 1) {
    // console.log(`@${diagram[y][x]}: ${diagram[y - 1][x + 1]}`);
    topRight = diagram[y - 1][x + 1] || " ";
  }
  //if (diagram[y][x] == ".") {
  //console.log(`${diagram[y][x]}}: ${(y + 1) < (diagram.length)}`);
  //console.log(diagram[y + 1]);
  //throw new Error("hi");
  //}
  if (y + 1 < diagram.length && x < diagram[y + 1].length) {
    bottomRight = diagram[y + 1][x + 1] || " ";
    //console.log(diagram[y + 1]);
    //console.log(`${diagram[y][x]}: ${x} ${y} ${bottomRight}`);
    //throw new Error("hi");
  }
  if (y < diagram.length - 1 && x > 0) {
    bottomLeft = diagram[y + 1][x - 1] || " ";
  }
  if (y > 0 && x > 0) {
    topLeft = diagram[y - 1][x - 1] || " ";
  }
  return [top, right, bottom, left, topRight, bottomRight, bottomLeft, topLeft];
  //.map((el) => alias[el] ? alias[el] : el);
}

// module.exports = create;
