var items = `<input type="button" onclick="newItem()" value="+">`;
var count = 0;

document.getElementById('saleitems').innerHTML = items;

function newItem() {
    count++;
    items = `<table><tr>
    <td>Description</td>
    <td>Name</td>
    <td>Stock</td>
    <td>Color</td>
    <td>Item Number</td>
    <td>Unit Price</td>
    </tr>

    <tr>
    <td><input type="text" id='desc` + count + `'></td>
    <td><input type="text" id='name` + count + `'></td>
    <td><input type="number" id='stock` + count + `'></td>
    <td><input type="text" id='color` + count + `'></td>
    <td><input type="number" id='itemnumber` + count + `'></td>
    <td><input type="number" id='unitprice` + count + `'></td>
    </tr>
    </table>` + items;

    document.getElementById('saleitems').innerHTML = items;
}