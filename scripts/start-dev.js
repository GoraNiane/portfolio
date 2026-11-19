import { spawn } from 'child_process';
import path from 'path';

console.log('===========================================================');
console.log('  Lancement du Portfolio Gora Niane en mode Développement  ');
console.log('===========================================================');

const isWindows = process.platform === 'win32';
const npmCmd = isWindows ? 'npm.cmd' : 'npm';

// Démarrage du backend sur le port 5000
const backend = spawn(npmCmd, ['run', 'dev'], {
  cwd: path.resolve(process.cwd(), 'backend'),
  stdio: 'inherit',
  shell: true,
});

// Démarrage du frontend sur le port 5173
const frontend = spawn(npmCmd, ['run', 'dev'], {
  cwd: path.resolve(process.cwd(), 'frontend'),
  stdio: 'inherit',
  shell: true,
});

const cleanup = () => {
  console.log('\nFermeture des serveurs de développement...');
  backend.kill();
  frontend.kill();
  process.exit(0);
};

process.on('SIGINT', cleanup);
process.on('SIGTERM', cleanup);
