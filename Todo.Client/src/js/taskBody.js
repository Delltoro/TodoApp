


const body = `
<form action="" class="Tform">

   <h2 style="padding-bottom: 1rem;" class="heading-secondary">
     Create Task 
   </h2>

  <div id="taskTitle" style="padding-bottom: 1rem;">
      <label for="title">Title</label>
      <input type="title" class="Tform__input" placeholder="Title">
  </div>

  <div style="padding-bottom: 1rem;">
    <textarea name="comment" placeholder="Type description here"></textarea>
  </div>

<div style="text-align: center;padding-bottom: 0.6rem;">
  <label for="tags" id="tagLabel">Select tag</label>
  <select id="tags" multiple>
    <option value="Work" name="work">Work</option>
    <option value="Hobbys" name="hobby">Hobbys</option>
    <option value="Exercise" name="exercise">Exercise</option>
    <option value="Health&Wellness" name="health">Health + Wellness</option>
    <option value="Creativity" name="creativity">Creativity</option>
    <option value="HouseholdDuties" name="duty">Household duties</option>
  </select>
</div>
  <input type="submit" value="Add task!">
</form>
`

export default body;