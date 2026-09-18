import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
    hoveredDay: number | null = null;
    todayDay: number = 0;
    todayMonth: number = 0;

    ngOnInit() {
        // Use current date for "today" highlight
        const today = new Date();
        this.todayDay = today.getDate();
        this.todayMonth = today.getMonth(); // March is 2
    }

    setHover(day: number | null) {
        this.hoveredDay = day;
    }

    isToday(day: number, monthStr: string): boolean {
        if (monthStr === 'SEPTIEMBRE' && this.todayMonth === 8 && this.todayDay === day) {
            return true;
        }
        return false;
    }
}
