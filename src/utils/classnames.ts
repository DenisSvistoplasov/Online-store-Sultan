export function classnames(...args: any[]) {
  let res = '';

  args.forEach(arg => {
    if ((typeof arg === 'string' && arg) || typeof arg === 'number') {
      res += arg + ' ';
    }
    else if (typeof arg === 'object') {
      for (const key in arg) {
        if (arg[key]) res += key + ' ';
      }
    }
  });
  
  return res.trim();
}