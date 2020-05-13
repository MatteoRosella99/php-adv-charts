<?php
  header('Content-Type: application/json');
  include 'database.php';

  $fatturato['data'] = $graphs['fatturato']['data'];
  foreach ($graphs['fatturato_by_agent']['data'] as $name => $value) {
    $labels [] = $name;
    $dati[] = $value;
  }
  $fba ['type'] = $graphs['fatturato_by_agent']['type'];
  $fba ['labels'] = $labels;
  $fba ['dati'] = $dati;
  $fatturato ['fba'] = $fba;
  $fatturato ['mesi'] = $graphs ['mesi'];
  $fatturato ['type'] = $graphs ['fatturato']['type'];


  echo json_encode($fatturato);
 ?>
