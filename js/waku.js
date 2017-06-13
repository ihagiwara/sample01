function copyWaku() {
    $(".ui-selected").each(function () {
        var name = this.id;
        var wakuNum = name.slice(4);
        var ps = document.getElementById(wakuNum + "Ps").value;
        var x = document.getElementById(wakuNum + "X").value;
        var y = document.getElementById(wakuNum + "Y").value;
        var ang = document.getElementById(wakuNum + "Ang").value;
        addWaku(ps, x, y, ang);
    });
}

function cngDai() {
    var daiId = document.getElementById("daiId").value;
    var ps = daiId.slice(0,-3);
    if (ps !=="d"){
        var daiMoto = document.getElementById("daiMoto").value;
        var daiSaki = document.getElementById("daiSaki").value;
//        document.getElementById("drag" + daiId).innerHTML = daiSaki;
        document.getElementById(daiId + "Dai").value = daiSaki;
        alert(daiMoto + "番台を" + daiSaki + "番台に変更しました。");
    }
}

function cngMsg() {
    var msgNow = document.getElementById("msgNow").value;
    if (msgNow == 's') {
        /*
        $(".waku").each(function () {
            var name = this.id;
            var wakuNum = name.slice(4);
            document.getElementById(wakuNum + "Msg").firstChild.nodeValue = wakuNum;
        });
        */
        document.getElementById("msgNow").value = "n";
        document.getElementById("cngMsg").value = "台表示";
    } else if (msgNow == 'd') {
        /*
        $(".waku").each(function () {
            var name = this.id;
            var wakuNum = name.slice(4);
            var strShima = " ";
            $(".shima" + wakuNum).each(function () {
                if (strShima == " ") {
                    strShima = this.value;
                } else {
                    strShima += "," + this.value;
                }
            });
            document.getElementById(wakuNum + "Msg").firstChild.nodeValue = strShima;
        });
        */
        document.getElementById("msgNow").value = "s";
        document.getElementById("cngMsg").value = "表示しない";
    } else if (msgNow == 'n') {
        /*
        $(".waku").each(function () {
            var name = this.id;
            var wakuNum = name.slice(4);
            var strShima = " ";
            $(".shima" + wakuNum).each(function () {
                if (strShima == " ") {
                    strShima = this.value;
                } else {
                    strShima += "," + this.value;
                }
            });
            document.getElementById(wakuNum + "Msg").firstChild.nodeValue = strShima;
        });
        */
        document.getElementById("msgNow").value = "d";
        document.getElementById("cngMsg").value = "島表示";
    }
}

function addShima() {
    $(".ui-selected").each(function () {
        var name = this.id;
        var wakuNum = name.slice(4);
        var ps = document.getElementById(wakuNum + "Ps").value;
        if (ps !== "d") {

            var shimaTxt = document.getElementById("shimaAdd").value;
            var wakuShima = document.createElement('input');
            wakuShima.type = "hidden";
            wakuShima.value = shimaTxt;
            //                wakuShima.id = wakuNum + "Shima";
            wakuShima.name = "data[" + wakuNum + "][shima][]";
            wakuShima.className = "shima" + wakuNum;
            dataarea.appendChild(wakuShima);
        }


        /*
                            var name = this.id;
                            var wakuNum = name.slice(4);
                            var shima = document.getElementById(wakuNum + "Shima").value;
                            var shimaTxt = document.getElementById("shimaAdd").value;
                            if (shimaTxt !== "") {
                                if (shima == "") {
                                    document.getElementById(wakuNum + "Shima").value = shimaTxt;
                                } else {
                                    document.getElementById(wakuNum + "Shima").value += "," + shimaTxt;
                                }
                            }
        */
    });
    alert("島データを追加しました。");
}

function delShima() {
    var msgNow = document.getElementById("msgNow").value;
    $(".ui-selected").each(function () {
        var name = this.id;
        var wakuNum = name.slice(4);
        var delName = document.getElementsByName("data[" + wakuNum + "][shima][]");
        while (delName.length) {
            delName[delName.length - 1].remove()
            //                        parent.removeChild(delName[delName.length - 1]);
        }
        if (msgNow == "s") {
            document.getElementById(wakuNum + "Msg").firstChild.nodeValue = "";
        }
    });
    alert("島データを削除しました。");
}

function cngAngle(lr) {
    $(".ui-selected").each(function () {
        var name = this.id;
        var wakuNum = name.slice(4);

        //                    var daiId = this.id;
        var daiAng = document.getElementById(wakuNum + "Ang").value;
        var classlist = document.getElementById(name).classList;
        document.getElementById(name).classList.remove("ang" + daiAng);
        if (lr == 'l' && daiAng > 0) {
            daiAng--;
        } else if (lr == 'r' && daiAng < 6) {
            daiAng++;
        }
        document.getElementById(name).classList.add("ang" + daiAng);
        document.getElementById(wakuNum + "Ang").value = daiAng;
        //                    document.getElementById("angle").value = daiAng;
    });

}

/*            $(".waku").on("click", function () {
                var name = this.id;
                var wakuNum = name.slice(4);
                document.getElementById('daiMoto').value = document.getElementById(wakuNum + "Dai").value;
                document.getElementById('angle').value = document.getElementById(wakuNum + "Ang").value;
                document.getElementById('daiId').value = wakuNum;

                document.getElementById(name).classList.contains("ui-selected");

            });
*/
/*            
            function selWaku(name) {
                //                    var name = this.id;
                var wakuNum = name.slice(7);
                document.getElementById('daiMoto').value = document.getElementById(wakuNum + "Dai").value;
                document.getElementById('angle').value = document.getElementById(wakuNum + "Ang").value;
                document.getElementById('daiId').value = wakuNum;
            }
*/
function delWaku() {
    $(".ui-selected").each(function () {
        var name = this.id;
        var wakuNum = name.slice(4);
        var droparea = document.getElementById("droparea");
        var dataarea = document.getElementById("dataarea");
        var del = document.getElementById("drag" + wakuNum);
        //        var delMsg = document.getElementById(wakuNum + "Msg");
        var delPs = document.getElementById(wakuNum + "Ps");
        var delX = document.getElementById(wakuNum + "X");
        var delY = document.getElementById(wakuNum + "Y");
        var delDai = document.getElementById(wakuNum + "Dai");
        var delAng = document.getElementById(wakuNum + "Ang");
        droparea.removeChild(del);
        //        droparea.removeChild(delMsg);
        dataarea.removeChild(delPs);
        dataarea.removeChild(delX);
        dataarea.removeChild(delY);
        dataarea.removeChild(delDai);
        dataarea.removeChild(delAng);

        $(".shima" + wakuNum).each(function () {
            dataarea.removeChild(this);
        });
    });
    document.getElementById('daiMoto').value = "";
    document.getElementById('angle').value = "";
    document.getElementById('daiId').value = "";
    alert("削除しました。");
}

function addWaku(ps, x, y, ang) {

    var wakuNum = document.getElementById('incWaku').value;
    var wakuImg = document.createElement('p');
    wakuImg.id = "drag" + wakuNum;
    wakuImg.name = "drag" + wakuNum;
    if (ang == 10) {
        var numAng = 3;
    } else {
        var numAng = ang;
    }
    wakuImg.className = "waku " + ps + "dai ang" + numAng;
    //var t = document.createTextNode(wakuNum);
    //wakuImg.appendChild(t);

    //                var randLeft = 10 + Math.random() * 260;
    //                var randTop = 10 + Math.random() * 260;
    if (x == 0) {
        var randLeft = 402;
        var randTop = 22;
    } else {
        var randLeft = Number(x) + 30;
        var randTop = Number(y) + 30;
    }
    wakuImg.style.left = Math.floor(randLeft) + "px";
    wakuImg.style.top = Math.floor(randTop) + "px";

    /*
                    var wakuEve = document.createElement('a');
                    wakuEve.href = "#";
                    wakuEve.id = "dragEve" + wakuNum;
                    wakuEve.setAttribute('onclick', "selWaku(this.id);");
    
                    wakuEve.appendChild(wakuImg);
    */
    droparea.appendChild(wakuImg);
    /*
        var wakuMsg = document.createElement('p');
        wakuMsg.id = wakuNum + "Msg";
        wakuMsg.className = "wakumsg";
        var msgNow = document.getElementById('msgNow').value
        if (msgNow == 'd') {
            var t2 = document.createTextNode(wakuNum);
            wakuMsg.appendChild(t2);
        }
        droparea.appendChild(wakuMsg);
        wakuMsg.style.left = Math.floor(randLeft) + "px";
        wakuMsg.style.top = (Math.floor(randTop) + 25) + "px";
    */
    var wakuPs = document.createElement('input');
    wakuPs.type = "hidden";
    wakuPs.value = ps;
    wakuPs.id = wakuNum + "Ps";
    wakuPs.name = "data[" + wakuNum + "][ps]";
    dataarea.appendChild(wakuPs);

    var wakuX = document.createElement('input');
    wakuX.type = "hidden";
    wakuX.value = parseInt(wakuImg.style.left);
    wakuX.id = wakuNum + "X";
    wakuX.name = "data[" + wakuNum + "][x]";
    dataarea.appendChild(wakuX);

    var wakuY = document.createElement('input');
    wakuY.type = "hidden";
    wakuY.value = parseInt(wakuImg.style.top);
    wakuY.id = wakuNum + "Y";
    wakuY.name = "data[" + wakuNum + "][y]";
    dataarea.appendChild(wakuY);

    var wakuDai = document.createElement('input');
    wakuDai.type = "hidden";
    if (ps == "d") {
        wakuDai.value = "";
    } else {
        wakuDai.value = wakuNum;
    }
    wakuDai.id = wakuNum + "Dai";
    wakuDai.name = "data[" + wakuNum + "][dai]";
    dataarea.appendChild(wakuDai);

    var wakuAng = document.createElement('input');
    wakuAng.type = "hidden";
    wakuAng.value = numAng;
    wakuAng.id = wakuNum + "Ang";
    wakuAng.name = "data[" + wakuNum + "][ang]";
    dataarea.appendChild(wakuAng);

    /*
                    var wakuShima = document.createElement('input');
                    wakuShima.type = "hidden";
                    wakuShima.value = "";
                    wakuShima.id = wakuNum + "Shima";
                    wakuShima.name = "data[" + wakuNum + "][shima][]";
                    droparea.appendChild(wakuShima);
    */
    document.getElementById('incWaku').value++;

    document.getElementById('zahyou').value = wakuImg.style.left + "." + wakuImg.style.top;

    selAndDrag();
}
