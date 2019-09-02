
let startProcessSites = (event) => {
    event.preventDefault();

    socket.emit('to_process', {
        'scan': scanTextarea.value,
        'bookmarks': bookmarksTextarea.value
    })
};

socket.on('process_result', (data) => {
    console.log(data)
});

let siteForm = document.getElementById('siteForm');
siteForm.addEventListener('submit', startProcessSites);

let scanTextarea = document.getElementById('scan-textarea');
let bookmarksTextarea = document.getElementById('bookmarks-textarea');
