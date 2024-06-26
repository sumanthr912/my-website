import React from "react";
//kkk
const CourseCard = (props) => {
  const { id,imgUrl, title, lesson, students, rating } = props.item;
 if(id==1){
  return(
    <div className="single__course__item">
    <div className="course__img">
      <img src={imgUrl} alt="" className="w-100" />
    </div>

    <div className="course__details">
      <h6 className="course__title mb-4">{title}</h6>

      <div className=" d-flex justify-content-between align-items-center">
        <p className="lesson d-flex align-items-center gap-1">
          <i class="ri-book-open-line"></i> {lesson} Lessons
        </p>

        <p className="students d-flex align-items-center gap-1">
          <i class="ri-user-line"></i> {students}K
        </p>
      </div>

      <div className=" d-flex justify-content-between align-items-center">
        <p className="rating d-flex align-items-center gap-1">
          <i class="ri-star-fill"></i> {rating}K
        </p>
        
        <p className="enroll d-flex align-items-center gap-1">
      
          <a href="https://www.youtube.com/watch?v=HcOc7P5BMi4"> <button type="button" class="btn btn-outline-primary">Go To Course</button></a>

</p>

      </div>
    </div>
  </div>

  );
 }
 else if(id==2){
  return(
  <div className="single__course__item">
  <div className="course__img">
    <img src={imgUrl} alt="" className="w-100" />
  </div>

  <div className="course__details">
    <h6 className="course__title mb-4">{title}</h6>

    <div className=" d-flex justify-content-between align-items-center">
      <p className="lesson d-flex align-items-center gap-1">
        <i class="ri-book-open-line"></i> {lesson} Lessons
      </p>

      <p className="students d-flex align-items-center gap-1">
        <i class="ri-user-line"></i> {students}K
      </p>
    </div>

    <div className=" d-flex justify-content-between align-items-center">
      <p className="rating d-flex align-items-center gap-1">
        <i class="ri-star-fill"></i> {rating}K
      </p>
      
      <p className="enroll d-flex align-items-center gap-1">
    
        <a href="https://www.youtube.com/watch?v=rZ41y93P2Qo&list=PL9gnSGHSqcnr_DxHsP7AW9ftq0AtAyYqJ"> <button type="button" class="btn btn-outline-primary">Go To Course</button></a>

</p>

    </div>
  </div>
</div>
);
 }
  else if(id==3){
  return (
    <div className="single__course__item">
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>

      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1">
            <i class="ri-book-open-line"></i> {lesson} Lessons
          </p>

          <p className="students d-flex align-items-center gap-1">
            <i class="ri-user-line"></i> {students}K
          </p>
        </div>

        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1">
            <i class="ri-star-fill"></i> {rating}K
          </p>
          
          <p className="enroll d-flex align-items-center gap-1">
        
            <a href="https://www.youtube.com/watch?v=QFaFIcGhPoM&list=PLC3y8-rFHvwgg3vaYJgHGnModB54rxOk3"> <button type="button" class="btn btn-outline-primary">Go To Course</button></a>
 
  </p>

        </div>
      </div>
    </div>
  );
  }
      else if(id==4){
    return(
      <div className="single__course__item">
      <div className="course__img">
        <img src={imgUrl} alt="" className="w-100" />
      </div>
  
      <div className="course__details">
        <h6 className="course__title mb-4">{title}</h6>
  
        <div className=" d-flex justify-content-between align-items-center">
          <p className="lesson d-flex align-items-center gap-1">
            <i class="ri-book-open-line"></i> {lesson} Lessons
          </p>
  
          <p className="students d-flex align-items-center gap-1">
            <i class="ri-user-line"></i> {students}K
          </p>
        </div>
  
        <div className=" d-flex justify-content-between align-items-center">
          <p className="rating d-flex align-items-center gap-1">
            <i class="ri-star-fill"></i> {rating}K
          </p>
          
          <p className="enroll d-flex align-items-center gap-1">
        
            <a href="https://www.youtube.com/watch?v=ESnrn1kAD4E"> <button type="button" class="btn btn-outline-primary">Go To Course</button></a>
  
  </p>
  
        </div>
      </div>
    </div>
  
    );
   }
   else if(id==5){
    return(
    <div className="single__course__item">
    <div className="course__img">
      <img src={imgUrl} alt="" className="w-100" />
    </div>
  
    <div className="course__details">
      <h6 className="course__title mb-4">{title}</h6>
  
      <div className=" d-flex justify-content-between align-items-center">
        <p className="lesson d-flex align-items-center gap-1">
          <i class="ri-book-open-line"></i> {lesson} Lessons
        </p>
  
        <p className="students d-flex align-items-center gap-1">
          <i class="ri-user-line"></i> {students}K
        </p>
      </div>
  
      <div className=" d-flex justify-content-between align-items-center">
        <p className="rating d-flex align-items-center gap-1">
          <i class="ri-star-fill"></i> {rating}K
        </p>
        
        <p className="enroll d-flex align-items-center gap-1">
      
          <a href="https://www.youtube.com/watch?v=SBmSRK3feww"> <button type="button" class="btn btn-outline-primary">Go To Course</button></a>
  
  </p>
  
      </div>
    </div>
  </div>
  );
   }
    else{
    return (
      <div className="single__course__item">
        <div className="course__img">
          <img src={imgUrl} alt="" className="w-100" />
        </div>
  
        <div className="course__details">
          <h6 className="course__title mb-4">{title}</h6>
  
          <div className=" d-flex justify-content-between align-items-center">
            <p className="lesson d-flex align-items-center gap-1">
              <i class="ri-book-open-line"></i> {lesson} Lessons
            </p>
  
            <p className="students d-flex align-items-center gap-1">
              <i class="ri-user-line"></i> {students}K
            </p>
          </div>
  
          <div className=" d-flex justify-content-between align-items-center">
            <p className="rating d-flex align-items-center gap-1">
              <i class="ri-star-fill"></i> {rating}K
            </p>
            
            <p className="enroll d-flex align-items-center gap-1">
          
              <a href="https://www.youtube.com/watch?v=IPvYjXCsTg8"> <button type="button" class="btn btn-outline-primary">Go To Course</button></a>
   
    </p>
  
          </div>
        </div>
      </div>
    );
    };
}

export default CourseCard;
