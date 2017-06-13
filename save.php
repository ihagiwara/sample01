<?php

    $arr_waku = array();
    
    for ($i = 1; $i <= 1000; ++$i){
        if(isset($_POST['data'][$i]['x'])){
            $arr_waku += array($i => array("ps" => $_POST['data'][$i]['ps'], "x" => $_POST['data'][$i]['x'], "y" => $_POST['data'][$i]['y'], "dai" => $_POST['data'][$i]['dai'], "ang" => $_POST['data'][$i]['ang'], "shima" => $_POST['data'][$i]['shima']));
        }
    }
    
//            $arr_waku = array("1" => array($_POST['data']['0']['x'], $_POST['data']['0']['y']));

    $arr_json = json_encode($arr_waku);

    $file_name = "save.json";
    
header('Content-Type: application/octet-stream');
header('Content-Disposition: attachment; filename=' . $file_name);
//header("Content-Length:".filesize($arr_json));

//header('Content-Disposition: attachment; filename="' . $file_name . '"');
//readfile($arr_json);
/*
    $fp = fopen('php://output','w');

    //CSVをエクセルで開くことを想定して文字コードをSJISへ変換する設定を行う
//    stream_filter_append($fp, 'convert.iconv.UTF-8/CP932', STREAM_FILTER_WRITE);

    foreach($arr_waku as $arr_output){
        fputcsv($fp, $arr_output);
    }
    fclose($fp);
*/

    // ファイル保存のおまじない
    $file = fopen($file_name, "w") or die("OPEN error $file_name");
    flock($file, LOCK_EX);
    fputs($file, $arr_json."\n");
    flock($file, LOCK_UN);
    fclose($file);


?>
