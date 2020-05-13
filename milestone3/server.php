<?php
  include 'database.php';
  header('Content-Type: application/json');

  $fatturato = $graphs['fatturato'];

  foreach ($graphs['fatturato_by_agent']['data'] as $name => $dato) {
    $fba['utenti'][] = $name;
    $fba['data'][] = $dato;
  }
  foreach ($graphs['team_efficiency']['data'] as $team => $resoconto) {
    $te['team'][] = $team;
    $te['resoconto'][] = $resoconto;
  }

  $fba['type'] = $graphs['fatturato_by_agent']['type'];
  $fba['access'] = $graphs['fatturato_by_agent']['access'];

  $te['type'] = $graphs['team_efficiency']['type'];
  $te['access'] = $graphs['team_efficiency']['access'];


  $fatturato['fba'] = $fba;
  $fatturato['te'] = $te;
  $fatturato['mesi'] = $graphs['mesi'];
  $fatturato['get'] = $_GET['level'];
  

  echo json_encode($fatturato);
 ?>
