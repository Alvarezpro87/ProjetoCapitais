<?php
$dados = file_get_contents('http://app:3000/capitais');
$dados = json_decode($dados, true);
foreach ($dados as $nome) {
    echo $nome['estado'] . ' - ' . $nome['capital'] . '<br>';
}
?>
