const noteinput=document.querySelector("#noteinput");
const addbtn=document.querySelector("#addbtn");
const noteswall=document.querySelector("#noteswall");

let allnotes=[];
const colors=["#ffeb3b","#ff7eb9","#7afbff","#a7ff83","#cdb4db"];

addbtn.addEventListener("click",()=>{
    let text=noteinput.value;
    if(text==="") return; //dont add empty notes

    let randomcolor=colors[Math.floor(Math.random()*colors.length)];

    let noteobj={
        id:Date.now(), //it generates a unique number everytime you click//
        text:text,
        color:randomcolor
    };
    allnotes.push(noteobj);
    noteinput.value=""; //clear the box becoz its empty for next note//
    rendernotes();
});
// always define the function outside the event
    function rendernotes(){
    noteswall.innerHTML=""; //clear wall 1st//
    allnotes.forEach((note)=>{
        noteswall.innerHTML+=`<div class="notes-card" style="background-color:${note.color}">
        <p>${note.text}</p> 
        <button class="del-btn"onclick="deletenote(${note.id})">Delete</button></div>`; /*('+= ->append it keeps the old note&adds next note to it,
                                        ${note.text}->tells the js to find the note-obj)*/
});
} //closing fun() here//

    function deletenote(targetid){
        allnotes=allnotes.filter(note=>{
            return note.id!==targetid
        });
        rendernotes();
    }
   
    