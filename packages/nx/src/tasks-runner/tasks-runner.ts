import { NxJsonConfiguration } from '../config/nx-json';
import { ProjectGraph } from '../config/project-graph';
import { Task, TaskGraph } from '../config/task-graph';
import { NxArgs } from '../utils/command-line-utils';
import { Hasher } from '../hasher/hasher';

export type TaskStatus =
  | 'success'
  | 'failure'
  | 'skipped'
  | 'local-cache-kept-existing'
  | 'local-cache'
  | 'remote-cache';

/**
 * `any | Promise<{ [id: string]: TaskStatus }>`
 * will change to Promise<{ [id: string]: TaskStatus }> after Nx 15 is released.
 */
export type TasksRunner<T = unknown> = (
  tasks: Task[],
  options: T,
  context?: {
    target?: string;
    initiatingProject?: string | null;
    projectGraph: ProjectGraph;
    nxJson: NxJsonConfiguration;
    nxArgs: NxArgs;
    taskGraph?: TaskGraph;
    hasher?: Hasher;
  }
) => any | Promise<{ [id: string]: TaskStatus }>;
