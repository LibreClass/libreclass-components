@extends('social.master')

@section('css')
@parent
{{ HTML::style('css/blocks.css') }}
@stop

@section('js')
@parent
{{ HTML::script('js/blocks.js') }}
{{ HTML::script('js/avaliablefinal.js') }}
@stop

@section('body')
@parent


<div class="row">
  <div class="col-md-8 col-xs-12 col-sm-12">
    <div class="block">
      <div class="row">
        <div class="col-sm-10 col-xs-12">
          <h3 class="text-blue"><i class="fa fa-line-chart"></i> <b>RECUPERAÇÃO FINAL</b></h3>
        </div>
        <div class="col-sm-2 col-xs-12 text-right">
          <a href='{{ URL::to("lectures") }}' class="btn btn-default btn-block btn-block-xs">Voltar</a>
        </div>

      </div>
    </div>

    <div id="block" class="block">
{{ Form::open() }}

          <div class="row">
            <div class="col-md-8 col-xs-12">
              <div class="form-group">
                <div class="form-inline">

                  {{ Form::label("date-day", "Data da avaliação ")}}
                  {{ Form::selectRange("date-day", 1, 31, date("d", strtotime($offer->dateFinal)),["class" => "form-control"]) }}
                  {{ Form::selectRange("date-month", 1, 12, date("m", strtotime($offer->dateFinal)), ["class" => "form-control"]) }}
                  {{ Form::selectRange("date-year", date("Y"), date("Y")-100, date("Y", strtotime($offer->dateFinal)), ["class" => "form-control"]) }}
                </div>
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                {{ Form::label("type", "Instrumento de Avaliação") }}
                {{ Form::select("type", [ "Prova Dissertativa Individual",
                                          "Prova Dissertativa em Grupo",
                                          "Prova Objetiva Individual",
                                          "Prova Objetiva em Grupo",
                                          "Trabalho Dissertativo Individual",
                                          "Trabalho Dissertativo em Grupo",
                                          "Apresentação de Seminário",
                                          "Projeto",
                                          "Produção Visual",
                                          "Pesquisa de Campo",
                                          "Texto Dissertativo"
                                        ], $offer->typeFinal, ["class" => "form-control", "required"]) }}
              </div>
            </div>
          </div>

          <div class="row">
            <div class="col-md-12">
              <div class="form-group">
                {{ Form::label("comment", "Comentários") }}
                {{ Form::textarea("comment", $offer->comments, ["class" => "form-control", "size" => "30x2"]) }}
              </div>
            </div>
          </div>


          <div class="row">
              <div class="col-md-12 col-xs-12">
                <button class="btn btn-primary">Salvar</button>
              </div>
          </div>


{{ Form::close() }}
      </div>

    <div class="block">


          <div class="row">
            <div class="col-md-12">
              <h3><i class="fa fa-bar-chart"></i> Inserção de Notas</h3>
            </div>
          </div>
          <div class="block-list-item">
            <div class="row">
              <div class="col-md-12">
              {{ Form::open(["id" => "exam-form"]) }}
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th style="width: 60%;">Nome</th>
                      <th>Média</th>
                      <th>Nota Final</th>
                    </tr>
                  </thead>
                  <tbody id='{{ Crypt::encrypt($offer->id) }}'>

  @foreach($alunos as $aluno)
    @if($aluno->med < $course->average)
                    <tr id='{{ Crypt::encrypt($aluno->id) }}'>
                      <td>{{ $aluno->name }}</td>
                      <td>{{ sprintf("%.2f", $aluno->med ) }}</td>
                      <td>
                        <div class="form-inline">
                          <div class="form-inside pull-left">
                            {{ Form::text("exam-value", $aluno->final, ["class" => "form-control-1x form-control exam-value", "data" => $aluno->final]) }}
                            <i class="fa fa-undo form-inside-icon icon-default click back-avaliable"></i>
                            <i class="fa fa-send form-inside-icon text-info click submit-avaliable"></i>
                          </div>
                          <div class="pull-left feedback-response small"></span>
                        </div>
                      </td>
                    </tr>
    @endif
  @endforeach

                  </tbody>
                </table>
                {{ Form::close() }}

              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

@stop

