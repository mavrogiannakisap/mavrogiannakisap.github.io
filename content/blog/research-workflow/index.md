---
title: "My Research Workflow: Tools and Practices for PhD Students"
summary: Sharing my setup and practices for efficient research in computer science
authors:
  - admin
tags:
  - Research
  - Productivity
  - Academia
  - Tools
categories:
  - Academic Life
date: '2024-01-10T00:00:00Z'
lastmod: '2024-01-10T00:00:00Z'
featured: false
draft: false

image:
  caption: 'Research workflow'
  focal_point: ''
  preview_only: false

projects: []
---

## Introduction

Over my years as a PhD student, I've refined a research workflow that helps me stay organized, productive, and sane. Here's what works for me!

## Paper Management

### Zotero for References

I use **Zotero** to manage all papers I read:

- **Browser extension**: One-click saving of papers from arXiv, IEEE, ACM, etc.
- **PDF management**: Automatic download and organization
- **Notes and annotations**: Built-in PDF reader with highlighting
- **BibTeX export**: Seamless integration with LaTeX

**Pro tip**: Use collections to organize papers by project/topic:
```
📁 PhD Research
  📁 ORAM Papers
  📁 MPC Papers
  📁 Privacy-Preserving ML
📁 Background Reading
📁 Teaching Resources
```

### Reading Strategy

Not all papers deserve equal attention:

1. **First pass (5 min)**: Title, abstract, introduction, conclusion
   - Decide: relevant or not?

2. **Second pass (30 min)**: Read sections, skip proofs
   - Understand main contributions and techniques

3. **Third pass (2+ hours)**: Deep dive, understand proofs
   - Only for highly relevant papers
   - Take detailed notes in Zotero

## Note-Taking System

### Obsidian for Research Notes

I maintain an **Obsidian vault** for research notes:

```
research-notes/
├── Papers/
│   ├── Path-ORAM.md
│   ├── Circuit-ORAM.md
│   └── ...
├── Concepts/
│   ├── ORAM-Constructions.md
│   ├── Secure-Computation.md
│   └── ...
├── Ideas/
│   ├── Optimization-Idea-1.md
│   └── ...
└── Weekly-Notes/
    ├── 2024-W10.md
    └── ...
```

**Key practices**:
- **Atomic notes**: One concept per note
- **Bidirectional links**: Connect related ideas
- **Daily research log**: Track what I work on each day
- **Tag system**: `#idea`, `#todo`, `#question`, `#insight`

### Example Note Template

```markdown
# [Paper Title]

**Authors**: [Names]
**Venue**: [Conference/Journal]
**Year**: [Year]
**Link**: [URL]

## Summary
[2-3 sentence summary]

## Key Contributions
- Contribution 1
- Contribution 2

## Technical Approach
[Brief description of techniques]

## Strengths
- ...

## Limitations
- ...

## Relevance to My Research
[How this relates to my work]

## Questions
- [ ] Question 1
- [ ] Question 2

## Related Papers
- [[Link to related note 1]]
- [[Link to related note 2]]
```

## Writing and LaTeX

### Overleaf for Collaboration

For papers, I use **Overleaf**:
- Real-time collaboration with co-authors
- Version control via Git integration
- No LaTeX setup headaches

### My LaTeX Setup

Custom macros for common notation:

```latex
% Custom commands
\newcommand{\secparam}{\lambda}
\newcommand{\negl}{\mathsf{negl}}
\newcommand{\poly}{\mathsf{poly}}
\newcommand{\Enc}{\mathsf{Enc}}
\newcommand{\Dec}{\mathsf{Dec}}

% Common notation
\newcommand{\Z}{\mathbb{Z}}
\newcommand{\F}{\mathbb{F}}
\newcommand{\G}{\mathbb{G}}
```

Keeps papers consistent and typing efficient!

### Version Control

Even for solo writing:
```bash
git init
git add paper.tex figures/
git commit -m "Initial draft"

# Branch for major revisions
git checkout -b reviewer-response
```

Lifesaver when you need to recover deleted sections!

## Code and Experiments

### Project Organization

```
project-name/
├── README.md
├── requirements.txt
├── src/
│   ├── __init__.py
│   ├── oram.py
│   └── utils.py
├── tests/
│   └── test_oram.py
├── experiments/
│   ├── benchmark.py
│   └── results/
├── docs/
└── paper/
```

### Reproducibility Practices

1. **Dependencies**: Use `requirements.txt` or `conda environment.yml`
2. **Random seeds**: Always set for reproducible experiments
3. **Configuration files**: YAML/JSON for experiment parameters
4. **Logging**: Comprehensive logging of all experiments
5. **Documentation**: README with setup and run instructions

### Example Experiment Script

```python
import argparse
import json
import logging
from datetime import datetime

def run_experiment(config):
    """Run ORAM benchmark with given configuration"""
    # Setup logging
    log_file = f"logs/experiment_{datetime.now():%Y%m%d_%H%M%S}.log"
    logging.basicConfig(filename=log_file, level=logging.INFO)

    logging.info(f"Configuration: {json.dumps(config)}")

    # Run experiment
    results = benchmark_oram(
        block_size=config['block_size'],
        num_blocks=config['num_blocks'],
        num_accesses=config['num_accesses']
    )

    # Save results
    results_file = f"results/{config['experiment_name']}.json"
    with open(results_file, 'w') as f:
        json.dump(results, f, indent=2)

    return results

if __name__ == "__main__":
    parser = argparse.ArgumentParser()
    parser.add_argument('--config', required=True)
    args = parser.parse_args()

    with open(args.config) as f:
        config = json.load(f)

    run_experiment(config)
```

## Time Management

### Weekly Planning

Every Monday morning:
1. Review previous week's progress
2. Set 3 main goals for the current week
3. Schedule blocks for deep work (no meetings!)

### Pomodoro Technique

For focused work:
- 25 minutes deep work
- 5 minute break
- After 4 pomodoros: 30 minute break

Apps I use: **Forest** (mobile), **Focus@Will** (background music)

## Staying Current

### Following the Field

- **arXiv alerts**: Daily digest for cs.CR (cryptography)
- **Google Scholar alerts**: For specific topics and authors
- **Twitter/X**: Follow researchers in my field
- **Conference calendars**: Track deadlines and proceedings

### Reading Group

Weekly reading group with labmates:
- Rotate paper selection
- 30-minute presentation + discussion
- Great for discovering papers outside my immediate area

## Communication

### Academic Email

Template for reaching out to researchers:

```
Subject: Question about [Specific Paper/Topic]

Dear Dr. [Name],

I am a PhD student at UC Santa Cruz working on [brief description].
I recently read your paper "[Paper Title]" and found [specific aspect]
particularly interesting.

[Specific question or comment showing you read the paper carefully]

Thank you for your time and for your excellent research.

Best regards,
Apostolos Mavrogiannakis
PhD Student, Computer Science
UC Santa Cruz
```

**Key principles**:
- Be specific (shows you did your homework)
- Be concise (respect their time)
- Be professional

## Mental Health

Research is a marathon, not a sprint:

- **Regular exercise**: 30 minutes daily (running, gym, cycling)
- **Sleep**: Consistent schedule, 7-8 hours
- **Hobbies**: Photography, hiking (totally unrelated to research!)
- **Social connection**: Regular hangouts with non-PhD friends

**Burnout is real**. Taking breaks makes you more productive, not less.

## Tools Summary

| Category | Tool | Why |
|----------|------|-----|
| Papers | Zotero | Reference management |
| Notes | Obsidian | Knowledge graph |
| Writing | Overleaf | LaTeX collaboration |
| Code | VSCode | Best editor |
| Version Control | Git/GitHub | Everything |
| Experiments | Python + Jupyter | Analysis |
| Time Management | Google Calendar | Scheduling |
| Focus | Forest | Avoiding phone |

## Conclusion

This workflow evolved over years of trial and error. Your ideal setup will be different!

**General principles**:
- Automate repetitive tasks
- Document everything (future you will thank present you)
- Build systems, not just habits
- Regularly review and refine your workflow

What tools and practices work for you? I'd love to hear! Reach out via email or [Twitter](https://twitter.com/).

---

*This post reflects my personal workflow as of 2024. Check back for updates as I continue refining!*
