let count = 0;

/* function to handle liked button click */
function like_clicked() {
    count++;
    document.getElementById('like-summary').innerHTML = String(count) + " person likes this!";

  const text = document.getElementById('like-button').innerHTML;
  if( text.endsWith("e") ) {
        document.getElementById('like-button').innerHTML += "d";
    }
}


/* function to handle commonet button click */
function comment() {
  const commentText = document.getElementById('comment-area').value;
  if( commentText !=null && commentText.trim().length != 0 ) {
        //adding commeent in latest on top order
        document.getElementById('comments-display-area').innerHTML = "<div class='comment-class'>"+commentText+"</div>"
                                                                     + document.getElementById('comments-display-area').innerHTML;
        document.getElementById('comment-area').value = "";
    }
}

/* function to handle edit button click */
function edit() {
  const title = document.getElementById('post-title');
  const content = document.getElementById('post-content');

  /* make content of div editable */
    title.contentEditable = true;
    content.contentEditable = true;

    /* add pink border around editable div */
    title.style.border = "2px solid pink";
    content.style.border = "3px solid pink";

    /* hide edit button and show save button */
    document.getElementById('edit-button').style.display = 'none';
    document.getElementById('save-button').style.display = 'block';
}

/* function to handle save button click */
function save() {
  const title = document.getElementById('post-title');
  const content = document.getElementById('post-content');

  /* make content of div non-editable */
    title.contentEditable = false;
    content.contentEditable = false;

    /* remove pink border around non-editable div */
    title.style.border = 'none';
    content.style.border = 'none';

    /* hide save button and show edit button */
    document.getElementById('edit-button').style.display = 'block';
    document.getElementById('save-button').style.display = 'none';
}
