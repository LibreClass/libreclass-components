<?php

class Attend extends \Eloquent {
  protected $table = "Attends";

  public function getUser() {
    return User::find($this->idUser);
  }

  public function getExamsValue( $exam ) {
    $examValue = ExamsValue::where("idExam", $exam)->where("idAttend", $this->id)->first();
    if( $examValue )
      return $examValue->value;
    else
      return null;
  }

  public function getUnit()
  {
    return Unit::find($this->idUnit);
  }
}
