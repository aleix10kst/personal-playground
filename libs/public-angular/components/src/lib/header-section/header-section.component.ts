import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
  selector: 'personal-playground-header-section',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderSectionComponent {
  @Input() title!: string;
  @Input() count: number | null = null;
}
