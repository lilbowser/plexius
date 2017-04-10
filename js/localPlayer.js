var injectLocalLinks = function(resource) {
    var driveLetter = resource.resourcePath.substr(0,1);

    //driveMap is a map of physical drives to network drive locations. It is a dictionary located in constants.js
    if(driveMap !== null && driveLetter in driveMap)
    {
        var networkPath = driveMap[driveLetter];
    }else{
         networkPath = driveLetter;
    }


    var endOfPath = '"';
    var proccesedURL = resource.resourcePath.substr(2);
    proccesedURL = networkPath.concat(proccesedURL);
    // proccesedURL = proccesedURL.concat(endOfPath);
    // proccesedURL = encodeURI(proccesedURL);
    proccesedURL = proccesedURL.replace(/ /g,"*");

    var local_Explorer_container = constructLocalExplorerLink(proccesedURL, resource.resourceTimeOffset);
    var local_MPC_container = constructLocalMPCLink(proccesedURL, resource.resourceTimeOffset, resource.resourceParentID);

    jQuery(headerToolbarContainerEl).prepend(local_Explorer_container);
    jQuery(headerToolbarContainerEl).prepend(local_MPC_container);

    console.log("plexius", 'Local Links Inserted')
};


var constructLocalExplorerLink = function(local_player_url, time_code) {


    var URI = "webrun:C:\\Python27\\pythonw.exe C:\\workspace\\plexMPC-HCIntegrater.pyw explorer ";
    URI = URI.concat("none");
    URI = URI.concat(" ");
    URI = URI.concat("none");
    URI = URI.concat(" ");
    URI = URI.concat(local_player_url);

    var local_player_container_element = document.createElement("button");
    local_player_container_element.setAttribute("aria-label", "Explorer");
    local_player_container_element.setAttribute("role", "button");
    local_player_container_element.setAttribute("class", "ToolbarButton-toolbarButton-1gQOb Link-link-2wZEE Link-default-1sSkX tether-target tether-element-attached-top tether-element-attached-center tether-target-attached-bottom tether-target-attached-center");
    local_player_container_element.setAttribute("type", "button");

    // construct Explorer link
    var local_player_element_link = document.createElement("a");
    local_player_element_link.setAttribute("class", "Explorer_Link btn-gray");
    local_player_element_link.setAttribute("href", URI);
    local_player_element_link.setAttribute("title", "Open Location with Explorer");
    local_player_element_link.setAttribute("data-toggle", "tooltip");

    //Construct Logo
    var local_player_element_logo = document.createElement("i");
    local_player_element_logo.setAttribute("class", "glyphicon folder-open");
    local_player_element_link.appendChild(local_player_element_logo);


    local_player_container_element.appendChild(local_player_element_link);
    return local_player_container_element;
};

var constructLocalMPCLink = function(local_player_url, time_code, parentID) {

    //get URI for imgs
    var mpcLogo = getResourcePath("mpcLogo.png");
    var parent_id = parentID;
    //Finish Constructing URL

    var mpcURI = "webrun:C:\\Python27\\python.exe C:\\workspace\\plexMPC-HCIntegrater.pyw MPC ";
    mpcURI = mpcURI.concat(time_code);
    mpcURI = mpcURI.concat(" ");
    mpcURI = mpcURI.concat(parent_id);
    mpcURI = mpcURI.concat(" ");
    mpcURI = mpcURI.concat(local_player_url);
    mpcURI = mpcURI.concat(" ");
    mpcURI = mpcURI.concat(localStorage.myPlexAccessToken);


    var local_player_container_element = document.createElement("button");
    local_player_container_element.setAttribute("aria-label", "MPC");
    local_player_container_element.setAttribute("role", "button");
    local_player_container_element.setAttribute("class", "ToolbarButton-toolbarButton-1gQOb Link-link-2wZEE Link-default-1sSkX tether-target tether-element-attached-top tether-element-attached-center tether-target-attached-bottom tether-target-attached-center");
    local_player_container_element.setAttribute("type", "button");

    // construct MPC-HC link
    var local_player_element_link = document.createElement("a");
    local_player_element_link.setAttribute("class", "MPC_Link");
    local_player_element_link.setAttribute("href", mpcURI);
    local_player_element_link.setAttribute("title", "Play with MPC");
    local_player_element_link.setAttribute("data-toggle", "tooltip");

    //Construct Logo
    var local_player_element_logo = document.createElement("img");
    local_player_element_logo.setAttribute("boarder", "0");
    local_player_element_logo.setAttribute("src", mpcLogo);
    local_player_element_logo.setAttribute("width", "24");
    local_player_element_logo.setAttribute("height", "24");

    local_player_element_link.appendChild(local_player_element_logo);

    local_player_container_element.appendChild(local_player_element_link);

    return local_player_container_element;
};