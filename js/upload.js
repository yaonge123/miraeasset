function loadEpubList(){$.getJSON("/index.php/epub/epubs/",{}).done(function(b){$("#epublist").empty();for(var a=0;a<b.length;a++)$("#epublist").append('<li class="list-group-item"><div><h3>'+b[a].title+'</h3></div><div>   <div calss="col-md-6" style="margin-top:10px;">       <div class="input-group input-group-sm">           <span class="input-group-addon" id="prev-url_'+b[a].code+'">Prev.</span>           <input id="txt_preview_'+b[a].code+'" type="text" class="form-control" readonly aria-label="Preview" aria-describedby="prev-url_'+
b[a].code+'" value="http://'+window.location.hostname+"/viewer/fixed/"+b[a].code+'/orange/">           <span class="input-group-btn">               <a href="/index.php/viewer/fixed/'+b[a].code+'/orange/" target="blank"><button id="btn_preview_'+b[a].code+'" class="btn btn-primary btn-sm" type="button">Open</button></a>           </span>       </div>   </div>   <div calss="col-md-6" style="margin-top:10px;">       <div class="input-group input-group-sm">           <span class="input-group-addon" id="prod-url_'+
b[a].code+'">Prod.</span>           <input id="txt_production_'+b[a].code+'" type="text" class="form-control" readonly aria-label="Production" aria-describedby="prod-url_'+b[a].code+'" value="http://'+window.location.hostname+"/viewer/fixed/"+b[a].code+'/orange/pd/">           <span class="input-group-btn">               <a href="/index.php/viewer/fixed/'+b[a].code+'/orange/pd/" target="blank"><button id="btn_production_'+b[a].code+'" class="btn btn-primary btn-sm" type="button">Open</button></a>           </span>       </div>   </div></div><div class="row" style="margin-top:10px;">   <label class="checkbox-inline col-sm-3 col-6" style="margin-left:10px;">       <input id="toc_'+
b[a].code+'" class="menu_toggle" type="checkbox" '+("Y"==b[a].menu_toc?"checked":"")+' data-toggle="toggle" data-size="mini" data-style="ios"> Toc   </label>   <label class="checkbox-inline col-sm-3 col-6">       <input id="thumb_'+b[a].code+'" class="menu_toggle" type="checkbox" '+("Y"==b[a].menu_thumbnails?"checked":"")+' data-toggle="toggle" data-size="mini" data-style="ios"> Thumbnails   </label>   <label class="checkbox-inline col-sm-3 col-6">       <input id="single_'+b[a].code+'" class="menu_toggle" type="checkbox" '+
("Y"==b[a].menu_single?"checked":"")+' data-toggle="toggle" data-size="mini" data-style="ios"> Single View   </label>   <label class="checkbox-inline col-sm-3 col-6">       <input id="double_'+b[a].code+'" class="menu_toggle" type="checkbox" '+("Y"==b[a].menu_double?"checked":"")+' data-toggle="toggle" data-size="mini" data-style="ios"> Double View   </label>   <label class="checkbox-inline col-sm-3 col-6">       <input id="highlight_'+b[a].code+'" class="menu_toggle" type="checkbox" '+("Y"==b[a].menu_highlight?
"checked":"")+' data-toggle="toggle" data-size="mini" data-style="ios"> Highlight   </label>   <label class="checkbox-inline col-sm-3 col-6">       <input id="draw_'+b[a].code+'" class="menu_toggle" type="checkbox" '+("Y"==b[a].menu_draw?"checked":"")+' data-toggle="toggle" data-size="mini" data-style="ios"> Draw   </label>   <label class="checkbox-inline col-sm-3 col-6">       <input id="bookmark_'+b[a].code+'" class="menu_toggle" type="checkbox" '+("Y"==b[a].menu_bookmark?"checked":"")+' data-toggle="toggle" data-size="mini" data-style="ios"> Bookmark   </label>   <label class="checkbox-inline col-sm-3 col-6">       <input id="search_'+
b[a].code+'" class="menu_toggle" type="checkbox" '+("Y"==b[a].menu_search?"checked":"")+' data-toggle="toggle" data-size="mini" data-style="ios"> Search   </label>   <label class="checkbox-inline col-sm-3 col-6">       <input id="help_'+b[a].code+'" class="menu_toggle" type="checkbox" '+("Y"==b[a].menu_help?"checked":"")+' data-toggle="toggle" data-size="mini" data-style="ios"> Help   </label></div>   <div class="input-group input-group-sm col-12" style="margin-top:10px;">       <span class="input-group-addon" id="basic-addon2">Help Link</span>       <input id="txt_helplink_'+
b[a].code+'" type="text" class="form-control" placeholder="Help Link" aria-label="Help Link" value="'+b[a].link_help+'">       <span class="input-group-btn">           <button id="btn_helplink_'+b[a].code+'" class="btn btn-primary btn-sm btn_help" type="button">Save</button>       </span>   </div>   <div class="input-group input-group-sm col-12" style="margin-top:10px;">       <span class="input-group-addon" id="basic-addon3">View Restrictions(0:All)</span>       <input id="txt_limit_'+b[a].code+
'" type="text" class="form-control" placeholder="View Restrictions" aria-label="View Restrictions" value="'+b[a].limitpage+'">       <span class="input-group-btn">           <button id="btn_limit_'+b[a].code+'" class="btn btn-primary btn-sm btn_limit" type="button">Save</button>       </span>   </div><button type="button" class="btn btn-warning listbutton btn-md" onClick="removeEpub(\''+b[a].code+'\')">Delete</button><button type="button" class="btn btn-info update btn-md" data-toggle="modal" onClick="updateContents(\''+
b[a].code+"')\">Update</button></li>"),$(".menu_toggle").bootstrapToggle();$(".menu_toggle").unbind();$(".menu_toggle").change(function(b){var a=b.target.id;b=a.split("_")[0];a=a.split("_")[1];updateMenuStatus(b,a,$(this).prop("checked")?"Y":"N")});$(".btn_help").unbind();$(".btn_help").bind("click",function(a){a=a.target.id.replace("btn_helplink_","");updateHelpLink(a,$("#txt_helplink_"+a).val())});$(".btn_limit").unbind();$(".btn_limit").bind("click",function(a){a=a.target.id.replace("btn_limit_",
"");updateLimitPage(a,$("#txt_limit_"+a).val())})}).fail(function(b,a,c){console.log("Request Failed: "+(a+", "+c))})}function addContents(){$("#epub_code").val("");$("#modalEpubUploader").modal()}function updateContents(b){$("#epub_code").val(b);$("#modalEpubUploader").modal()}function updateMenuStatus(b,a,c){$.getJSON("/index.php/epub/menustatus/"+b+"/"+a+"/"+c+"/",{}).done(function(a){}).fail(function(a,b,c){console.log("Request Failed: "+(b+", "+c))})}
function updateHelpLink(b,a){$.getJSON("/index.php/epub/helplink/"+b+"/?url="+encodeURIComponent(a),{}).done(function(a){alert("Saved Link.")}).fail(function(a,b,d){console.log("Request Failed: "+(b+", "+d))})}function updateLimitPage(b,a){$.getJSON("/index.php/epub/limitpage/"+b+"/"+a+"/",{}).done(function(a){alert("Saved.")}).fail(function(a,b,d){console.log("Request Failed: "+(b+", "+d))})}
function removeEpub(b){bootbox.confirm({message:"Are you sure you want to delete this contents?",buttons:{confirm:{label:"Yes",className:"btn-success"},cancel:{label:"No",className:"btn-danger"}},callback:function(a){a&&$.getJSON("/index.php/upload/remove/"+b+"/",{}).done(function(a){loadEpubList()}).fail(function(a,b,d){console.log("Request Failed: "+(b+", "+d))})}})}$(document).ready(function(){loadEpubList()});