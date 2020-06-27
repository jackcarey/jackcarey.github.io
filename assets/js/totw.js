Date.prototype.getWeek = function () {
    var onejan = new Date(this.getFullYear(), 0, 1);
    return Math.ceil((((this - onejan) / 86400000) + onejan.getDay() + 1) / 7);
}

window.onload = function (f) {
    var now = new Date();
    var week = now.getWeek();
    var wkpc = week / 53;
    var cutOff = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 7);
    var tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
    var elems = document.getElementsByClassName("totw-link");
    //we only want to do work if there are elements to do work on
    if (elems.length > 0) {
        var thisWeeksLinks = [];
        var allLinks = totwLinks || [];
        //choose a fixed link for this week, in case something fails in the upcoming code
        var defaultIndex = Math.floor(wkpc * allLinks.length);
        var chosenLink = allLinks[defaultIndex];

        //parse date strings
        function parseDate(input){
            return (input=="present" || input=="perpetual") ? cutOff : input;
        }

        //add current links to this weeks list
        for (var i = 0; i < allLinks.length; ++i) {
            var link = allLinks[i];
            link.date = parseDate(link.date);
            if(link && link.date && link.date >=cutOff && link.date <=tomorrow ){
                thisWeeksLinks.push(link);
            }
        }

        //sort by date desc, then by a function of the week number
        thisWeeksLinks.sort(function (a, b) {
            var dateCompare = (b.date - a.date);
            var urlsLen = a.url.length + b.url.length;
            var mixCompare = Math.round((urlsLen*wkpc)%53)%2;
            return dateCompare || mixCompare;
        });

        if (chosenLink && chosenLink!=undefined) {
            for (var j = 0; j < elems.length; ++j) {
                var elem = elems[j];
                var index = Math.min(thisWeeksLinks.length, Math.max(0, elem.dataset.index)); //find the link number we wish to return
                if (thisWeeksLinks.length > 0) {
                    chosenLink = thisWeeksLinks[index];
                }
                var graphic = document.createElement(chosenLink && chosenLink.img ? "img" : "i"); //create either an image or italic tag
                if (chosenLink && chosenLink.img) { //if it's an image, add the source
                    graphic.src = chosenLink.img;
                    graphic.alt = chosenLink.title;
                } else if (chosenLink && chosenLink.icon) { //if it's a graphic, add the classes
                    graphic.className = (chosenLink.iconPrefix||"fas") + " " + chosenLink.icon;
                } else { //default on a star icon
                    graphic = document.createElement("i");
                    graphic.className = "fas fa-star";
                }
                elem.title = chosenLink.title;
                elem.innerHTML = "";//clear existing HTML
                elem.href = chosenLink.url;
                var thisDt = new Date(chosenLink.date);
                elem.dataset["date"] = thisDt.getFullYear()+"-"+(thisDt.getMonth<10?"0":"")+(thisDt.getMonth()+1)+"-"+(thisDt.getDate()<9?"0":"")+thisDt.getDate();
                elem.appendChild(graphic); //add the graphic then the title
                elem.appendChild(document.createTextNode(chosenLink.title));
            }
        }
    }
};