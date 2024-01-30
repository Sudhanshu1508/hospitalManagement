function showContent(contentType) {
    document.getElementById("medicalStoresInput").style.display = "none";
    document.getElementById("medicalServicesInput").style.display = "none";
    document.getElementById("doctorsInput").style.display = "none";

    if (contentType === 'medicalStores') {
        document.getElementById("medicalStoresInput").style.display = "block";
    } else if (contentType === 'medicalServices') {
        document.getElementById("medicalServicesInput").style.display = "block";
    } else if (contentType === 'doctors') {
        document.getElementById("doctorsInput").style.display = "block";
    }
}
