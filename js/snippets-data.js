/**
 * 88 Essential Linux SysAdmin Commands for Troubleshooting
 * Ranked by common usage in checking/troubleshooting scenarios.
 */
const linuxSnippets = [
    // --- NETWORK ---
    { title: "Check Connectivity", cmd: "ping -c 4 google.com", desc: "Basic ICMP echo request to verify network reachability.", tags: ["network"] },
    { title: "Trace Network Path", cmd: "mtr -rw google.com", desc: "Combines ping and traceroute for real-time path analysis.", tags: ["network", "troubleshoot"] },
    { title: "List Listening Ports", cmd: "ss -tunlp", desc: "Modern replacement for netstat to show active sockets.", tags: ["network", "sockets"] },
    { title: "DNS Query (Short)", cmd: "dig google.com +short", desc: "Quickly resolve domain names to IP addresses.", tags: ["network", "dns"] },
    { title: "Detailed DNS Info", cmd: "dig google.com ANY", desc: "Fetch all available DNS records for a domain.", tags: ["network", "dns"] },
    { title: "Reverse DNS Lookup", cmd: "dig -x 8.8.8.8", desc: "Identify the hostname associated with an IP address.", tags: ["network", "dns"] },
    { title: "HTTP Header Check", cmd: "curl -I https://google.com", desc: "Fetch only the response headers from a web server.", tags: ["network", "web"] },
    { title: "Network Interface Info", cmd: "ip -c addr", desc: "Show IP addresses and interface states with color coding.", tags: ["network", "interface"] },
    { title: "Bandwidth Monitor", cmd: "iftop -n", desc: "Real-time bandwidth usage by host connection.", tags: ["network", "bandwidth"] },
    { title: "Packet Capture (Port 80)", cmd: "tcpdump -i any port 80 -v", desc: "Sniff traffic on a specific port for analysis.", tags: ["network", "security"] },
    { title: "Scan Network Ports", cmd: "nmap -sV 192.168.1.1", desc: "Determine which services are running on a host.", tags: ["network", "security"] },
    { title: "Test TCP Connection", cmd: "nc -zv 1.1.1.1 443", desc: "Verify if a specific port is open on a remote host.", tags: ["network", "troubleshoot"] },
    { title: "Check Routing Table", cmd: "ip route show", desc: "Display the kernel's current IP routing table.", tags: ["network", "routing"] },
    { title: "Local IP List", cmd: "hostname -I", desc: "Quickly list all IP addresses assigned to this node.", tags: ["network"] },

    // --- SYSTEM PERFORMANCE ---
    { title: "System Dashboard", cmd: "htop", desc: "Interactive process viewer and system resource monitor.", tags: ["performance", "cpu"] },
    { title: "CPU Usage Summary", cmd: "mpstat -P ALL 1", desc: "Report individual CPU core usage statistics.", tags: ["performance", "cpu"] },
    { title: "I/O Statistics", cmd: "iostat -xz 1", desc: "Report CPU and disk I/O throughput and latency.", tags: ["performance", "disk"] },
    { title: "Memory Breakdown", cmd: "free -m -t", desc: "Show total, used, and free RAM including swap and total.", tags: ["performance", "memory"] },
    { title: "Load Average", cmd: "uptime", desc: "Show how long the system has been running and load averages.", tags: ["performance"] },
    { title: "Virtual Memory Stats", cmd: "vmstat 1", desc: "Report virtual memory, processes, traps, and CPU activity.", tags: ["performance", "memory"] },
    { title: "Process Tree", cmd: "pstree -p", desc: "Visualize the parent-child relationship of running processes.", tags: ["performance", "process"] },
    { title: "Zombie Processes", cmd: "ps aux | grep 'Z'", desc: "Search for dead processes waiting for their parent.", tags: ["performance", "troubleshoot"] },
    { title: "High Memory Usage", cmd: "ps aux --sort=-%mem | head", desc: "List the top 10 memory-consuming processes.", tags: ["performance", "memory"] },

    // --- DISK & FILESYSTEM ---
    { title: "Disk Usage (Human)", cmd: "df -h", desc: "Summary of used and available space on all partitions.", tags: ["disk"] },
    { title: "Largest Directories", cmd: "du -ah /var | sort -rh | head -n 20", desc: "Find the 20 largest files/folders in a path.", tags: ["disk", "troubleshoot"] },
    { title: "List Open Files", cmd: "lsof -u root", desc: "List all files currently held open by root users.", tags: ["disk", "security"] },
    { title: "File Type Check", cmd: "file secret_config", desc: "Identify the file format of a given file.", tags: ["disk"] },
    { title: "Disk Speed Test", cmd: "dd if=/dev/zero of=test bs=64k count=16k conv=fdatasync", desc: "Write speed benchmark for the current disk.", tags: ["disk", "benchmark"] },
    { title: "Check SSD Health", cmd: "smartctl -a /dev/sda", desc: "Fetch SMART data from a storage device.", tags: ["disk", "hardware"] },
    { title: "Identify Block Devices", cmd: "lsblk -f", desc: "List devices with UUIDs and mount points.", tags: ["disk"] },
    { title: "Find Large Files (>100MB)", cmd: "find / -type f -size +100M -exec ls -lh {} +", desc: "Locate massive files anywhere on the system.", tags: ["disk", "search"] },

    // --- LOGS & TROUBLESHOOTING ---
    { title: "System Boot Logs", cmd: "journalctl -b", desc: "Review logs generated during the current boot cycle.", tags: ["logs"] },
    { title: "Follow Service Logs", cmd: "journalctl -u nginx -f", desc: "Watch logs for a specific service in real-time.", tags: ["logs", "troubleshoot"] },
    { title: "Kernel Ring Buffer", cmd: "dmesg | tail -n 50", desc: "Check kernel messages for hardware or driver errors.", tags: ["logs", "hardware"] },
    { title: "Search Gzipped Logs", cmd: "zgrep 'error' /var/log/nginx/*.gz", desc: "Search compressed log rotates without unzipping.", tags: ["logs", "troubleshoot"] },
    { title: "Trace System Calls", cmd: "strace -p <pid>", desc: "Attach to a process to debug its system interactions.", tags: ["troubleshoot", "process"] },
    { title: "Open Files by Process", cmd: "lsof -p <pid>", desc: "See which files a specific process is using.", tags: ["troubleshoot", "process"] },
    { title: "Check SSL Expiry", cmd: "openssl s_client -connect google.com:443 2>/dev/null | openssl x509 -noout -dates", desc: "Verify SSL certificate validity dates.", tags: ["security", "web"] },

    // --- SERVICES & PROCESSES ---
    { title: "Show Active Services", cmd: "systemctl list-units --type=service --state=running", desc: "List all services currently running on the node.", tags: ["systemd"] },
    { title: "Check Service Status", cmd: "systemctl status sshd", desc: "Detailed health and recent log output for a service.", tags: ["systemd"] },
    { title: "Find process by name", cmd: "pgrep -fl nginx", desc: "Locate a process ID using its name string.", tags: ["process"] },
    { title: "Kill by name", cmd: "pkill -9 -f 'bad_script'", desc: "Forcefully terminate all processes matching a pattern.", tags: ["process"] },
    { title: "Reload Service Config", cmd: "systemctl reload nginx", desc: "Refresh configuration without downtime.", tags: ["systemd"] },

    // --- SSH & REMOTE ---
    { title: "SSH Reverse Tunnel", cmd: "ssh -R 8080:localhost:80 user@remote_ip", desc: "Expose local port 80 to remote port 8080.", tags: ["ssh", "network"] },
    { title: "SSH Local Tunnel", cmd: "ssh -L 3306:localhost:3306 user@db_server", desc: "Access a remote DB as if it were local.", tags: ["ssh", "network"] },
    { title: "Dry-run Sync", cmd: "rsync -anv /src/ /dest/", desc: "Simulate a file sync to see what would change.", tags: ["rsync", "disk"] },
    { title: "Sync with Progress", cmd: "rsync -avzP /local/ /remote:/new/", desc: "Efficient file transfer with compression and resumes.", tags: ["rsync"] },
    { title: "Copy SSH Key", cmd: "ssh-copy-id -i ~/.ssh/id_rsa.pub user@host", desc: "Enable passwordless key-based login.", tags: ["ssh", "security"] },

    // --- SECURITY & PERMS ---
    { title: "Perms in Octal", cmd: "stat -c '%a %n' *", desc: "Show numeric permissions for all files in a folder.", tags: ["security"] },
    { title: "Recursively set Perms", cmd: "find . -type d -exec chmod 755 {} + && find . -type f -exec chmod 644 {} +", desc: "Sanitize permissions for web folders.", tags: ["security", "disk"] },
    { title: "List Open Root Files", cmd: "sudo lsof -u root", desc: "Find which files are currently open by the root account.", tags: ["security"] },
    { title: "Firewall Status", cmd: "ufw status numbered", desc: "List firewall rules with IDs for easy deletion.", tags: ["security", "network"] },
    { title: "Check User Groups", cmd: "id -Gn", desc: "Show all groups the current user belongs to.", tags: ["security"] },

    // --- HARDWARE & KERNEL ---
    { title: "CPU Topology", cmd: "lscpu", desc: "Detailed breakdown of cores, sockets, and cache.", tags: ["hardware"] },
    { title: "PCI Device List", cmd: "lspci -tv", desc: "Tree view of PCI devices (GPU, NIC, etc.).", tags: ["hardware"] },
    { title: "USB Device List", cmd: "lsusb", desc: "List all connected USB devices.", tags: ["hardware"] },
    { title: "Kernel Version", cmd: "uname -a", desc: "Detailed kernel and architecture string.", tags: ["system"] },
    { title: "BIOS/System Info", cmd: "dmidecode -t system", desc: "Fetch hardware serial and model from BIOS.", tags: ["hardware"] },

    // --- DOCKER ---
    { title: "Prune All Docker", cmd: "docker system prune -a --volumes", desc: "Wipe all unused containers, images, and volumes.", tags: ["docker"] },
    { title: "Docker Network List", cmd: "docker network ls", desc: "List all virtual networks created by Docker.", tags: ["docker"] },
    { title: "Inspect Container IP", cmd: "docker inspect -f '{{range .NetworkSettings.Networks}}{{.IPAddress}}{{end}}' <container>", desc: "Get the internal IP of a container.", tags: ["docker", "network"] },
    { title: "Live Container Logs", cmd: "docker logs -f --tail 100 <container>", desc: "Follow the last 100 lines of container output.", tags: ["docker", "logs"] },

    // --- PACKAGE MANAGEMENT ---
    { title: "Search Packages", cmd: "apt search nginx", desc: "Find available packages in the repository.", tags: ["packages"] },
    { title: "List Installed", cmd: "dpkg -l | grep '^ii'", desc: "List all packages fully installed on the system.", tags: ["packages"] },
    { title: "Clean Package Cache", cmd: "apt clean && apt autoremove", desc: "Remove old .deb files and unused dependencies.", tags: ["packages", "disk"] },

    // --- FILE SEARCH ---
    { title: "Search Text In Files", cmd: "grep -rnE 'TODO|FIXME' .", desc: "Recursive search for patterns in current directory.", tags: ["search"] },
    { title: "Find Recently Modded", cmd: "find . -mtime -1 -type f", desc: "List files changed in the last 24 hours.", tags: ["search", "disk"] },
    { title: "Locate Binary", cmd: "whereis nginx", desc: "Find binary, source, and manual page paths.", tags: ["search"] },

    // --- UTILITIES ---
    { title: "Color Diff", cmd: "diff -u file1 file2 | colordiff", desc: "Side-by-side comparison with syntax coloring.", tags: ["logic"] },
    { title: "Base64 Text", cmd: "echo -n 'text' | base64", desc: "Encode a string directly from cli.", tags: ["logic"] },
    { title: "Hash File", cmd: "sha256sum large_file.iso", desc: "Calculate the checksum of a local file.", tags: ["security"] },
    { title: "Watch Folder Size", cmd: "watch -n 5 'du -sh /var/log'", desc: "Repeat a command every 5 seconds to track growth.", tags: ["troubleshoot", "disk"] },
    { title: "Kill user sessions", cmd: "who | awk '{print $1}' | sort -u | xargs -I {} pkill -U {}", desc: "Log out all users instantly.", tags: ["security", "multiuser"] },
    { title: "Clear Buffer Cache", cmd: "echo 3 > /proc/sys/vm/drop_caches", desc: "Force release memory used by OS caches (use with care!).", tags: ["performance", "troubleshoot"] },
    { title: "Sort by size", cmd: "ls -Slh", desc: "List files in folder sorted by largest first.", tags: ["disk"] },
    { title: "Empty file", cmd: "> access.log", desc: "Instantly truncate a file to zero bytes.", tags: ["disk"] },
    { title: "Check Cron Jobs", cmd: "crontab -l", desc: "List the current user's scheduled cron tasks.", tags: ["system"] },
    { title: "Host Info Summary", cmd: "hostnamectl", desc: "Detailed setup info: OS, Kernel, Architecture.", tags: ["system"] },
    { title: "Environment List", cmd: "printenv | sort", desc: "Show all current session variables.", tags: ["system"] },
    { title: "Active TCP Flows", cmd: "netstat -ant | awk '{print $6}' | sort | uniq -c", desc: "Count network connections by state (ESTABLISHED, WAIT, etc).", tags: ["network", "troubleshoot"] },
    { title: "Count Files", cmd: "ls -1 | wc -l", desc: "Simple count of files in the current folder.", tags: ["disk"] },
    { title: "List Open Ports (Short)", cmd: "lsof -i -P -n | grep LISTEN", desc: "Alternate way to see listening services.", tags: ["network"] },
    { title: "Check Entropy", cmd: "cat /proc/sys/kernel/random/entropy_avail", desc: "Verify level of random noise available for SSL/SSH.", tags: ["security"] },
    { title: "Force Unmount", cmd: "umount -l /mnt/point", desc: "Lazy unmount for busy filesystems.", tags: ["disk"] },
    { title: "Check Swap Perf", cmd: "swapon --show", desc: "Detailed summary of swap partition usage and priority.", tags: ["performance", "memory"] },
    { title: "System Info (All)", cmd: "neofetch", desc: "Popular tool for a summary display of system info (if installed).", tags: ["hardware"] }
];
