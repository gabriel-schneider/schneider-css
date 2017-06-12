<?php


$routes = explode('/', $_SERVER['REQUEST_URI']);
$file = $routes[count($routes) - 1];
$extension = '.html';

if ($file == '') {
    $file = 'index';
}

if (file_exists($file . $extension)) {
    $content = file_get_contents($file . $extension);
} else {
    $content = 'Page not found!';
}

include 'layout.html';
