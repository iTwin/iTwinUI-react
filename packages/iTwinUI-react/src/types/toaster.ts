export interface Root {
  render(children: React.ReactNode): void;
  unmount(): void;
}
