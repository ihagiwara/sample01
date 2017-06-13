<?php

    $ret_str = "";
//    $ret_str .= "<div id=\"droparea\" class=\"ui-droppable\">\n";

    $file_name = "save.json";

    $arr_json = file_get_contents($file_name);
    $arr_json = mb_convert_encoding($arr_json, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
    $arr_waku = json_decode($arr_json,true);

    $max_inc = 1;
    if ($arr_waku === NULL) {
        return;
    } else {
        for($i = 1; $i <= 1000; ++$i){
            if (array_key_exists($i, $arr_waku)){
                $ret_str .= "<img src=\"img/waku_base2.png\" id=\"drag" . $i . "\" name=\"drag" . $i . "\" class=\"waku ui-draggable ui-draggable-handle\" style=\"left: " . $arr_waku[$i]["x"] . "px; top: " . $arr_waku[$i]["y"] . "px;\">\n";
                $ret_str .= "<input type=\"hidden\" value=\"" . $arr_waku[$i]["x"] . "\" id=\"" . $i . "X\" name=\"data[" . $i . "][x]\">\n";
                $ret_str .= "<input type=\"hidden\" value=\"" . $arr_waku[$i]["y"] . "\" id=\"" . $i . "Y\" name=\"data[" . $i . "][y]\">\n";
                $max_inc = $i + 1;
            } else {
            }
        }
    }

    $ret_str .= "<input type=\"hidden\" id=\"incWaku\" name=\"incWaku\" VALUE=" . $max_inc . " />";

    $ret_str .= "</div>\n";
//    $ret_str .= "</div>\n";

    $url = "script.txt";
    $ret_str .=  file_get_contents($url);



    echo $ret_str;


?>
