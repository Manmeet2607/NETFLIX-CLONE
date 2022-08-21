const tabs=document.querySelectorAll('.tab-items');
const tabscontent=document.querySelectorAll('.tab-content-item')


function selectitems(e)
{
    removerborder();
    removeshow();

   this.classList.add('tab-border');
   const newcontent=document.querySelector(`#${this.id}-content`);

   newcontent.classList.add('show');
}

function removerborder(){
    tabs.forEach(item =>
        {
            item.classList.remove('tab-border');
        });
}


function removeshow()
{
    tabscontent.forEach(item =>{
        item.classList.remove('show');
    });
}


tabs.forEach(item =>{
    item.addEventListener('click',selectitems);
});