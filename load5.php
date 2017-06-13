<?php

    if(isset($_POST['msgNow'])){$msg_now = $_POST['msgNow'];}else{$msg_now = 'd';}

    $ret_str = "";
    $ret_str .= "<div id=\"droparea\" name=\"droparea\" class=\"ui-selectable\">\n";

    $file_name = "save.json";

    $arr_json = file_get_contents($file_name);
    $arr_json = mb_convert_encoding($arr_json, 'UTF8', 'ASCII,JIS,UTF-8,EUC-JP,SJIS-WIN');
    $arr_waku = json_decode($arr_json,true);

    $max_inc = 1;
    if ($arr_waku == NULL) {
        return;
    } else {
        for($i = 1; $i <= 1000; ++$i){
            if (array_key_exists($i, $arr_waku)){
//                $ret_str .= "<a href=\"#\" id=\"dragEve" . $i . "\" onclick=\"selWaku(this.id);\">";
//                $ret_str .= "<p id=\"drag" . $i . "\" class=\"waku " . $arr_waku[$i]["ps"] . "dai ang" . $arr_waku[$i]["ang"] . " ui-draggable ui-draggable-handle\" style=\"left: " . $arr_waku[$i]["x"] . "px; top: " . $arr_waku[$i]["y"] . "px;\">" . $arr_waku[$i]["dai"] . "</p>";
                $ret_str .= "<p id=\"drag" . $i . "\" class=\"waku " . $arr_waku[$i]["ps"] . "dai ang" . $arr_waku[$i]["ang"] . " ui-draggable ui-draggable-handle\" style=\"left: " . $arr_waku[$i]["x"] . "px; top: " . $arr_waku[$i]["y"] . "px;\"></p>\n";
                if ($msg_now == "s"){
                    $str_shima = " ";
                    if (!(empty($arr_waku[$i]["shima"]))){
                        for ($j = 0; $j <= count($arr_waku[$i]["shima"]) - 1; $j++){
                            if ($str_shima == " "){
                                $str_shima = $arr_waku[$i]["shima"][$j];
                            } else{
                                $str_shima .= "," . $arr_waku[$i]["shima"][$j];
                            }
                        }
                    }            
                    $ret_str .= "<p id=\"" . $i . "Msg\" class=\"wakumsg ui-selectee\" style=\"left: " . $arr_waku[$i]["x"] . "px; top: " . ($arr_waku[$i]["y"] + 25) . "px;\">" . $str_shima . "</p>\n";
                } else{
                    $ret_str .= "<p id=\"" . $i . "Msg\" class=\"wakumsg ui-selectee\" style=\"left: " . $arr_waku[$i]["x"] . "px; top: " . ($arr_waku[$i]["y"] + 25) . "px;\">" . $arr_waku[$i]["dai"] . "</p>\n";
                }
//                $ret_str .= "</a>";
//                $ret_str .= "<img src=\"img/waku_base2.png\" id=\"drag" . $i . "\" name=\"drag" . $i . "\" class=\"waku ui-draggable ui-draggable-handle\" style=\"left: " . $arr_waku[$i]["x"] . "px; top: " . $arr_waku[$i]["y"] . "px;\">\n";
                $ret_str .= "<input type=\"hidden\" value=\"" . $arr_waku[$i]["ps"] . "\" id=\"" . $i . "Ps\" name=\"data[" . $i . "][ps]\">\n";
                $ret_str .= "<input type=\"hidden\" value=\"" . $arr_waku[$i]["x"] . "\" id=\"" . $i . "X\" name=\"data[" . $i . "][x]\">\n";
                $ret_str .= "<input type=\"hidden\" value=\"" . $arr_waku[$i]["y"] . "\" id=\"" . $i . "Y\" name=\"data[" . $i . "][y]\">\n";
                $ret_str .= "<input type=\"hidden\" value=\"" . $arr_waku[$i]["dai"] . "\" id=\"" . $i . "Dai\" name=\"data[" . $i . "][dai]\">\n";
                $ret_str .= "<input type=\"hidden\" value=\"" . $arr_waku[$i]["ang"] . "\" id=\"" . $i . "Ang\" name=\"data[" . $i . "][ang]\">\n";
                if (!(empty($arr_waku[$i]["shima"]))){
                    for ($j = 0; $j <= count($arr_waku[$i]["shima"]) - 1; $j++){
                            $ret_str .= "<input type=\"hidden\" value=\"" . $arr_waku[$i]["shima"][$j] . "\" name=\"data[" . $i . "][shima][]\" class=\"shima" . $i . "\">\n";
                    }
                }            
//                $ret_str .= "<input type=\"hidden\" value=\"" . $arr_waku[$i]["shima"] . "\" id=\"" . $i . "Shima\" name=\"data[" . $i . "][shima][]\">\n";
                $max_inc = $i + 1;
            } else {
            }
        }
    }

    $ret_str .= "<input type=\"hidden\" id=\"incWaku\" name=\"incWaku\" VALUE=" . $max_inc . " />\n";
    $ret_str .= "<input type=\"hidden\" id=\"msgNow\" name=\"msgNow\" VALUE=" . $msg_now . " />\n";

//    $ret_str .= "</div>\n";

    $ret_str .= "</div>\n";

    $url = "script7.txt";
    $ret_str .=  file_get_contents($url);


    echo $ret_str;


?>
