


const body = `
<form action="" class="Tform">
   <h2 style="padding-bottom: 1rem;" class="heading-secondary">
     Create Task 
   </h2>

<div id="taskTitle" style="padding-bottom: 1rem;">
   <label for="title">Title</label>
   <input type="title" class="form__input" placeholder="Title">
</div>

<div style="padding-bottom: 1rem;">
<textarea name="comment" placeholder="Type description here"></textarea>
</div>

<div style="margin-bottom: 2rem; text-align: center;">
  <label for="tags">Select tag</label>
  <select id="tags">
    <option value="A">Work</option>
    <option value="B">Exercise</option>
    <option value="C">School</option>
    <option value="A">Health + Wellness</option>
    <option value="B">Creativity</option>
    <option value="C">Household duties</option>
  </select>
  <button style="padding: 0.2rem 0.4rem; font-size: 1.1rem;"><strong>+</strong></button>
</div>
    <a href="#" id="addBtn">Add Task</a>  
  
</form>
`

export default body;