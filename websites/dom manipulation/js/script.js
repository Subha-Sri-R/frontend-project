const joblisting = [
    { title: 'Web Developer', type:'FullTime',location:'city A',salary: 30000},
    { title:'UX Designer', type:'PartTime',location:'city B',salary:40000},
];
document.addEventListener('DOMContentLoaded',function() {
    const jobtypefilter=document.getElementById('jobtype');
    const locationfilter=document.getElementById('location');
    const salaryfilter=document.getElementById('salary');
    const salaryValue=document.getElementById('salaryValue');
    const filterbtn=document.getElementById('filterbtn');
    const joblistingcontainer=document.getElementById('joblisting');
    renderjoblisting(joblisting);
    filterbtn.addEventListener('click',function() {
        filterjoblisting();
    });
    salaryfilter.addEventListener('input',function() {
      salaryValue.textContent=salaryfilter.value;
    });
    function renderjoblisting(joblistings) {
        joblistingcontainer.innerHTML='';
        joblistings.forEach(job => {
            const listingdiv=document.createElement('div');
            listingdiv.innerHTML = '<h3>${job.title}</h3> <p>type: ${job.type}</p><p>location: ${job.location}</p><p>salary: $${job.salary}</p>';
            joblistingcontainer.appendChild(listingdiv);

            
        });
    }
    function filterjoblisting() {
        const jobtype=jobtypefilter.value;
        const location=locationfilter.value.toLowerCase();
        const salary=parseInt(salaryfilter.value);
        const filteredjobs=joblisting.filter(job => {
            return (jobtype==='all'|| job.type===jobtype)&&
            (job.location.toLowerCase().includes(location))&&
            (job.salary >=salary);
        });
        renderjoblisting(filteredjobs);
    }
});