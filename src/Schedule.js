
const axios = require('axios');


let Schedule = {

  //#region  properties
  // Ссылка на страницу получения расписания
  url: 'https://mpt.ru/studentu/izmeneniya-v-raspisanii/',
  // Ключевые слова для изменений в расписании
  keywords: [
    'Занятие отменено с последующей отработкой',
    'Дополнительное занятие',
    'Занятие перенесено на',
    'ДЕНЬ САМОПОДГОТОВКИ'
  ],
  // Название открывающего тега с именем группы
  openTagGroupName: 'b',
  // Название закрывающего тега с именем группы
  closeTagGroupName: 'b',
  // Атрибут тега для поиска имени группы
  attrGroupName: '',
  // Значение атрибута для поиска имени группы
  attrValueGroupName: '',
  // Название открывающего тега группы
  openGroupTag: 'table',
  // Название закрывающего тега группы
  closeGroupTag: 'table',
  // атрибут для поиска изменений в расписании группы
  attrGroup: 'class',
  // значение атрибута для поиска изменений в расписании группы
  attrValueGroup: 'table table-striped',
  // Название открывающего тега для поиска схождений
  openTag: 'td', 
  // Название закрывающего тега для поиска схождений
  closeTag: 'td',
  // Название атрибута для поиска изменения что заменяют
  attrFromToName: 'class',
  // Название атрибута для поиска изменения НА что заменяют
  attrToFromName: 'class',
  // Значение атрибута элемента что заменяют
  attrValueFromTo: 'replace-from',
  // Значение атрибута элемента НА что заменяют
  attrValueToFrom: 'replace-to',
  // Массив изменений что заменяют
  fromToChanges: [],
  // Массив изменений НА какую дисциплину
  toFromChanges: [],
  
  //#endregion

  //#region methods

  // Принимает один параметр
  // reguestType - Тип запроса (GET или POST), по умолчанию GET
  // ЗАполняет массивы fromToChanges и toFromChanges данными для парсинга
  getScheduleChangesPage( requestType = "GET") {
    axios({
      method: 'get',
      url: this.url,
      responseType: "text"
    }).then( (response) => {

      let text = response.data;

      let groupChanges = [];
      
      
      while (true) {

        let openExp = new RegExp('<' + this.openGroupTag + ' ' + this.attrGroup + '="' + this.attrValueGroup + '">', 'iu');
        let closeExp = new RegExp('</' + this.openGroupTag + '>', 'iu');

        let openMatch = text.match(openExp);   
        let closeMatch = text.match(closeExp);
        
        
        
        if (openMatch == null && closeMatch == null) { break; }
        
        // console.log(closeMatch);
        

        let groupChangeRow = text.slice(openMatch.index, closeMatch.index + closeMatch[0].length + 1);
        groupChanges.push(groupChangeRow);

        text = text.slice(closeMatch.index + closeMatch[0].length + 1);
      }
      

      // this.mem = groupChanges;

      if (groupChanges == undefined || groupChanges == null) {
        alert('Изменений в расписании нет, либо произошла непредвиденная ошибка, вы знаете куда обращаться');
      } else {
          this.getGroupScheduleChanges(groupChanges);
      } 


      
    });
  },

  
  getRegExp(tag, attr, attrValue) {
    return new RegExp('<' + tag + '.*' + attr + '="' + attrValue + '".*>.*</.*' + tag + '>', 'gui');
  },
  
  cleanString ( arr, tag = '', attr = '', attrValue = '') {

    let newArray = [];
    let regExp = new RegExp(tag +'\|'+ attr +'\|' + attrValue + '\|<\|>\|/\|=\|"', 'gui');
    
    for (const element of arr) {
      newArray.push(element.replace( regExp, '').trim());
    }

    return newArray;
  },

  getGroupScheduleChanges(arr) {
    let gIndex = 0;
    for (let index = 0; index < arr.length; index++) {
      let element = arr[index];
      let groupNames = '';

      let froms = [];
      let toes = [];
      groupNames = element.match(new RegExp('<b>.*</b>', 'ui'));

      froms = element.match(this.getRegExp(this.openTag, this.attrFromToName, this.attrValueFromTo));
      toes = element.match(this.getRegExp(this.openTag, this.attrToFromName, this.attrValueToFrom));

      
      froms = this.cleanString(froms, this.openTag, this.attrFromToName, this.attrValueFromTo);
      toes = this.cleanString(toes, this.openTag, this.attrToFromName, this.attrValueToFrom);    

      if (groupNames != null) {
        if (groupNames.length > 1) {
          groups = groupNames.split(',');
          
          for (let i = 0; i < groups.length; i++) {
            
          }
        } else {
          if (froms.length != toes.length) { 
            alert('Если это сообщение появилось, то произошла возможно самая фатальная ошибка в работе данного софта');
            continue;
          } 
          for (let i = 0; i < froms.length; i++) {

            let fromElement = froms[i];
            
            this.createScheduleRowObject(fromElement, this.fromToChanges, groupNames[0], gIndex);
            gIndex++;
            
          }

          for(let i = 0; i < toes.length; i++) {
            
            let toElement = toes[i];
            this.createScheduleRowObject(toElement, this.toFromChanges, groupNames[0], gIndex);
            gIndex++;
          }
        }
      } else {
        alert('Ошибка при поиске названия группы');
      }
      
    }
    console.log(this.fromToChanges);
    console.log(this.toFromChanges);
  },

  findChanges(regExp, text) {
    let rows = text.match(regExp);
    return (rows == null ) ? [] : rows;
  },

  isKeyworded(scheduleRow) {
    scheduleRow = scheduleRow.toLowerCase();

    for (let index = 0; index < this.keywords.length; index++) {
      let element = this.keywords[index].toLowerCase();
      if ( scheduleRow.includes(element) ) {
        return true;
      }      
    }

    return false;
  },

  splitScheduleRow(scheduleRow) {
    let teacherRegExp = /\p{Alpha}\.\p{Alpha}\./ui;
    
    let teacher = scheduleRow.match(teacherRegExp);
    let lesson = '';



    if (teacher != null && teacher != undefined) {
      lesson = scheduleRow.slice(0, teacher.index);
      teacher = scheduleRow.slice(teacher.index);
      
      return [lesson, teacher];
    } else {
      return [];
    }
  },

  createScheduleRowObject(scheduleRow, changesArr, groupName, index) {

    if (!this.isKeyworded(scheduleRow)) {

      scheduleRow = this.splitScheduleRow(scheduleRow);
            

      let lesson = '';
      let teacher = '';
      let group = this.cleanGroupName(groupName.trim().toLowerCase());
      

      if (scheduleRow.length > 0) {
        [lesson, teacher] = scheduleRow;        
      }

      let scheduleObject = {
        index,
        group,
        lesson,
        teacher,
      };        
      
      changesArr.push(scheduleObject);
    }
  },

  cleanGroupName(messGroupName) {
    return messGroupName.replace(/<|>|b|\//gui, '').trim();
  },

  cleanChanges() {
    this.fromToChanges = [];
    this.toFromChanges = [];
  },

  //#endregion 
};


export { Schedule };



