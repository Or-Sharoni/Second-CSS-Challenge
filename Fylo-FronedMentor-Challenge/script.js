
let storageTotal = document.querySelector('.gb_max');
let storageUsed = document.querySelector('.storageUsed');
let storageLeft = document.querySelector('.storageLefts');
let progress = document.querySelector('.progress');
let total = 50;
let used = 0;

storageLeft.textContent = String(total - used);
storageTotal.textContent =String(total) + " GB";
storageUsed.textContent = String(used);
progress.style.width = ((used / total)*100) + "%" ;
document.querySelector('.upload').addEventListener('change', Size);

function Size() {
    var file = document.querySelector('.upload').files[0];
    var FileSize = file.size / 1024 / 1024;
    if (FileSize > 1.5) {
        alert('File size exceeds 1.5 MiB');
    } else {
        if (used+FileSize > total)
            {alert('You are out of storage!');}
        else{
            used+= FileSize;
            storageLeft.textContent = String((total - used).toFixed(2));
            storageUsed.textContent = String(used.toFixed(2));
            progress.style.width = ((used / total).toFixed(2)*100) + "%" ;
        }
    }
}