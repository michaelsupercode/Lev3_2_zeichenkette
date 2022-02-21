let choice = document.getElementById(`pre`);

let aSent = document.getElementById(`aSent`);
let bSent = document.getElementById(`bSent`);

function slicedOff() {
    let outCome = aSent.value.search(bSent.value);
    let pre = ``;
    let then = ``;

    if (outCome >= 0) {
        if (choice.checked === true) {
            pre = aSent.value.substring(0, outCome);
            then = aSent.value.substring(outCome);
        } else {
            then = aSent.value.substring(outCome + Number(bSent.value.length));
            pre = aSent.value.substring(0, outCome + Number(bSent.value.length));
        }
    } else {
        pre = `..sorry..`;
        then = aSent.value;
    }
    document.getElementById(`out_first`).innerHTML = pre;
    document.getElementById(`out_last`).innerHTML = then;
}