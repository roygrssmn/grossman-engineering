## Supporting back-office work

I designed and deployed DemoLogic to support the back-office workflows of Demo Radar, my independent civic-information product. I compared models and providers and measured suggestion quality and review effort.

The service suggests topic tags and prepares German daily briefing drafts. Demo Radar handles staff review, translation, and publication.

## Comparing models and providers

I compared keyword and regex rules, TF-IDF classifiers with logistic regression, multilingual NLI, and hosted language models. The hosted experiments included GPT-OSS through Groq, Qwen through Hetzner, and Gemini through Google. I recorded the model and provider separately, alongside their settings, response time, and estimated cost.

Recurring event groups were kept together when splitting the data to reduce leakage. I measured precision, recall, suggestion coverage, and complete tag-set agreement. Failures and abstentions remained visible. Reference-label review and model tuning had separate stages, with their limitations recorded.

## What the evidence changed

On the original **121-group final comparison**, F1 was **33.7% for regex, 39.7% for TF-IDF, and 65.5% for Qwen**. None met the combined project targets of 80% precision, 80% recall, and 95% coverage.

After further rubric development, a separate **34-case fresh check** gave Qwen **87.0% precision and 73.4% recall**, and Gemini **87.5% precision and 76.6% recall**. Both reached 97.1% coverage, but neither met the recall target. These are separate studies, not one improvement curve. References came from one reviewer and sometimes required interpretation or extra context.

The decision was to retain staff approval and deploy Qwen on Hetzner for suggestions. Gemini remains a research comparison for the deployed configuration described here. The [evaluation reports](https://github.com/demo-radar/demo-radar-logic/blob/main/docs/results/README.md) explain the results and their limits.

## Measuring productivity as well as quality

Fast inference does not establish that a workflow saves time. I ran a **20-case practical trial** comparing manual tagging with reviewing prepared AI suggestions, recording active review time, corrections, and unresolved cases separately from model response time.

The small, different batches and possible learning effects did not establish reliable staff time savings. That finding matters: a useful service must be judged by completed work and review effort as well as model quality. The [trial report](https://github.com/demo-radar/demo-radar-logic/blob/main/docs/results/practical-trial.md) preserves the outcome.

## From experiments to an integrated service

I deployed DemoLogic as a private, authenticated service alongside Demo Radar. It validates requests and responses, saves answers and usage, and retains recovery state across restarts. Stable request identities allow saved answers to be retrieved without another model call; uncertain outcomes pause work for investigation.

Demo Radar owns event selection, staff permissions, background jobs, and publication. DemoLogic owns inference and draft preparation. Staff approve suggestions before publication. This boundary keeps model changes separate from application permissions and editorial decisions.

## Public code and reproducibility

The [public repository](https://github.com/demo-radar/demo-radar-logic) includes service code, notebooks, methodology, and aggregate results. Its [synthetic API walkthrough](https://github.com/demo-radar/demo-radar-logic/blob/main/docs/reproducibility.md) checks authentication, suggestions, draft preparation, saved-answer replay, and restart recovery without provider credentials or private data.

The walkthrough demonstrates software behaviour. Reproducing the research scores requires the private dataset, reference labels, and saved model responses.

> ### Project context
>
> * **Context:** Independent project, initially developed as my AI Engineering capstone at neue fische × SPICED Academy, completed October 2026
> * **Delivery:** Private AI service integrated with Demo Radar; staff approval retained
> * **Code and evaluation:** [Public repository and reports](https://github.com/demo-radar/demo-radar-logic)
> * **Related work:** [Demo Radar: product, architecture, and operations](/en/project/demo-radar)
