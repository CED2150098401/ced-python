import { Process } from "@ced2023/process";

export class PythonError extends Error {}

export class Python extends Process<readonly string[]> {
  protected readonly command: string = "python";
  private readonly path: string;

  constructor(python: string | null, path: string) {
    super();

    if (python !== null) this.command = python;
    this.path = path;
  }

  protected getArguments(...args: readonly string[]): readonly string[] {
    return [this.path, ...args];
  }
}
