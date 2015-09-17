// This plugin selects all layers of a layer group


var onRun = function (context) {

    // old school variable
    doc = context.document;
    selection = context.selection;

    if (selection.count() == 1) {
        if (selection[0].className() == "MSLayerGroup") {
            var group = selection[0];
            doc.currentPage().deselectAllLayers();
            for (var i = 0; i < group.layers().count(); i++) {
                group.layers().objectAtIndex(i).setIsSelected(true);
            }
        }
    } else {
        doc.showMessage("Please select a layer group");
    }
}