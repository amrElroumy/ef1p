import { inject } from '../typescript/react/utility';

import { dnsTool } from '../typescript/tools/dns/tool';
import { ipTool } from '../typescript/tools/ip/tool';
import { zoneTool } from '../typescript/tools/zone/tool';

inject('tool-ip-info', ipTool);
inject('tool-dns-resolver', dnsTool);
inject('tool-zone-walker', zoneTool);
