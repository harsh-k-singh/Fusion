$(document).ready(function () {
    console.log("TTTTTTTT");
});



function announce(event) {
    event.preventDefault();
    var message = $('input[name="announcement"]').val();
    var batch = $('input[name="batch"]').val();
    var programme = $('input[name="programme"]').val();
    var department = $('input[name="department"]').val();
    var upload_announcement = $('input[name="upload_announcement"]')[0].files[0];
    if (message == "" || batch == "" || programme == "" || department == "") {
        alert("Fill required fields!!");
        return;
    }
    else {
        var formData = new FormData();
        formData.append('message', message);
        formData.append('batch', batch);
        formData.append('programme', programme);
        formData.append('upload_announcement', upload_announcement);
        formData.append('department', department);
        $.ajax({
            type: 'POST',
            url: '.',
            data: formData,
            contentType: false,
            processData: false,
            success: function (data) {

                alert("Announcement successfully made!!");
                setTimeout(function () {
                    window.location.reload();
                }, 1500);


            },
            error: function (data, err) {
                alert('Some error occured!!');

            }
        });
    }
};

document.getElementById("show_announcement_form").addEventListener("click", function (event) {
    event.preventDefault();
    let form = document.getElementById("make-announcement-form");
    let status = form.getAttribute("data-status");
    if (status == "hidden") {
        form.setAttribute("data-status", "visible");
        form.style.display = "block";
        this.innerHTML = "Done";
    }
    else {
        form.setAttribute("data-status", "hidden");
        form.style.display = "none";
        this.innerHTML = "Add Announce";
    }
});

function edit_about(self) {
    let form = document.getElementById("edit-about-form");
    let about = document.getElementById("about");
    let status = form.getAttribute("data-status");
    if (status == "hidden") {
        about.style.display = "none";
        form.setAttribute("data-status", "visible");
        form.style.display = "block";
        console.log(form);
        self.innerHTML = "Done";
    }
    else {
        about.style.display = "block";
        form.setAttribute("data-status", "hidden");
        form.style.display = "none";
        console.log(form);
        self.innerHTML = "Edit";
    }
}
function edit_facility(self) {
    let form = document.getElementById("edit-facility-form");
    let facility = document.getElementById("facility");
    let status = form.getAttribute("data-status");
    if (status == "hidden") {
        facility.style.display = "none";
        form.setAttribute("data-status", "visible");
        form.style.display = "block";
        console.log(form);
        self.innerHTML = "Done";
    }
    else {
        facility.style.display = "block";
        form.setAttribute("data-status", "hidden");
        form.style.display = "none";
        console.log(form);
        self.innerHTML = "Edit";
    }
}
function edit_achievement(self) {
    let form = document.getElementById("edit-achievement-form");
    let achievement = document.getElementById("achievement");
    let status = form.getAttribute("data-status");
    if (status == "hidden") {
        achievement.style.display = "none";
        form.setAttribute("data-status", "visible");
        form.style.display = "block";
        console.log(form);
        self.innerHTML = "Done";
    }
    else {
        achievement.style.display = "block";
        form.setAttribute("data-status", "hidden");
        form.style.display = "none";
        console.log(form);
        self.innerHTML = "Edit";
    }
}

function request(event) {
    var request_type = $('input[name="request_type"]').val();
    var request_to = $('input[name="request_to"]').val();
    var request_details = $('input[name="request_details"]').val();


    if (request_type == "" || request_to == "" || request_details == "") {
        alert("Please fill all the details!");
        return;
    }
    else {
        event.preventDefault();
        alert("please wait we are processing your request.");
        $.ajax({
            type: 'POST',
            url: '.',
            data: {
                'request_type': request_type,
                'request_to': request_to,
                'request_details': request_details,
            },
            success: function (data) {
                alert("Request successfully made!!");
                setTimeout(function () {
                    window.location.reload();
                }, 0);

            },
            error: function (data, err) {
                alert('Request not created');

            }
        });
    }
};

function editStatus(event) {
    alert("working but dont know what to do");
};

