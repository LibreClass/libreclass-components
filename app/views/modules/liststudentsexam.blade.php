@extends('social.master')

@section('css')
@parent
{{ HTML::style('css/blocks.css') }}
@stop

@section('js')
@parent
{{ HTML::script('js/blocks.js') }}
{{ HTML::script('js/avaliable.js') }}
@stop

@section('body')
@parent


<div class="row">
  <div class="col-md-8 col-xs-12 col-sm-12">
    <div class="block">
      <div class="row">
        <div class="col-sm-10">
          <h3 class="text-blue"><b><i class="fa fa-line-chart"></i> Avaliação</b></h3>
        </div>
        <div class="col-sm-2">
          <a href='{{ URL::to("/lectures/units?u=" . Crypt::encrypt($exam->idUnit)) }}' class="btn btn-default btn-block">Voltar</a>
        </div>

      </div>
    </div>

    <div id="block" class="block">
      <div class="row">
        <div class="col-md-12 col-xs-12">
            <h3>{{ $exam->title }}</h3>
        </div>
      </div>
      <hr>
@if( isset($exam->id) )
  {{ Form::hidden("exam", Crypt::encrypt($exam->id)) }}
@else
  {{ Form::hidden("unit", Crypt::encrypt($exam->idUnit)) }}
@endif
      <div class="row">
        <div class="col-md-8 col-xs-8">
          <span class="text-info"><i class="fa fa-calendar"></i>{{ " ". date("d / m / Y", strtotime($exam->date)) }}</span>
        </div>
      </div>

      <div class="row">
        <div class="col-md-12">
          <span><i class="fa fa-comment text-info"></i> {{ $exam->comments == "" ? "Não há comentários" : $exam->comments }} </span>
        </div>
      </div>
    </div>

    <div class="block">
      <div class="block-list">
        <div class="row">
          <div class="col-md-12">
            <h3 class="text-blue"><b><i class="fa fa-bar-chart"></i> Inserção de Notas</b></h3>
          </div>
        </div>
        <div class="block-list-item">
          <div class="row">
            <div class="col-md-12">
              <ul class="list-inline">
                <li><i class="fa fa-undo icon-default"></i> Desfazer</li>
                <li><i class="fa fa-send text-info"></i> Salvar</li>
              </ul>
              
              
            {{ Form::open(["id" => "exam-form"]) }}

              <table class="table table-hover">
                <thead>
                  <tr>
                    <th style="width: 60%;">Nome</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody id='{{ Crypt::encrypt($exam->id) }}'>

@foreach($students as $student )
                  <tr id='{{ Crypt::encrypt($student->id) }}'>
                    <td>{{ $student->getUser()->name }}</td>
                    <td>
                      <div class="form-inline">
                        <div class="form-inside pull-left">
                          {{ Form::text("exam-value", $student->getExamsValue($exam->id), ["class" => "form-control-1x form-control exam-value", "data" => $student->getExamsValue($exam->id)]) }}
                          <i class="fa fa-undo form-inside-icon icon-default click back-avaliable"></i>
                          <i class="fa fa-send form-inside-icon text-info click submit-avaliable"></i>   
                        </div>
                        <div class="pull-left feedback-response small"></div> 
                      </div>
                      
                    </td>
                  </tr>
@endforeach

                </tbody>
              </table>

              {{ Form::close() }}

            </div>
          </div>

          <br>
        </div>
      </div>
    </div>
    </div>
  </div>
</div>

@stop

