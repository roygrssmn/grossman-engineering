## Comparing models for topic-tag suggestions

DemoLogic is my AI Engineering capstone at neue fische × SPICED Academy, connected to Demo Radar. I built a separate notebook-based evaluation workflow to compare ways of suggesting topic tags, using reviewed examples, a fixed split, and event-group separation to reduce leakage from recurring demonstrations.

- **Simple baselines:** keyword and regex rules, plus word and character TF-IDF with logistic regression.
- **Semantic model:** multilingual mDeBERTa-v3 NLI (`MoritzLaurer/mDeBERTa-v3-base-mnli-xnli`).
- **Hosted LLMs:** OpenAI GPT-OSS 20B (`openai/gpt-oss-20b`) through Groq, and Qwen3.6 35B A3B FP8 (`Qwen/Qwen3.6-35B-A3B-FP8`) through Hetzner. Groq and Hetzner provide the inference services; the model identities are recorded separately.
- **Evaluation:** tagging quality, coverage, inference time, and cost, with reference-label review kept separate from model tuning. Production records, row-level predictions, and fitted private artifacts stay out of published material.

One useful result: the tested NLI setup gave less useful suggestions than rules or TF-IDF on the development checks. I retained its errors and limitations and recommended withholding that setup from service integration. This is evidence about one configuration, not a final-test result or a verdict on all semantic models.

### Integration design: the API boundary

My integration design puts model inference behind an API that returns suggestions. Demo Radar retains authentication, staff review, approval, and database writes. Model selection depends on evaluation evidence; manual tagging remains a valid outcome.

### Earlier Demo Radar experiment: recognising recurring events

Across 2,449 historical events, a title-only recurrence proxy achieved **29.2% precision**. Adding public location and schedule evidence—venue tokens, coarse postcode, weekday, and start time—increased provisional precision to **88.8%**. These features help identify recurring public event series; location and time never determine a political topic tag by themselves.

These are exploratory **event-recurrence matching results**, not topic-tagging accuracy or DemoLogic model scores.

> ### Project context
>
> * **Type:** AI Engineering capstone connected to Demo Radar
> * **Code and evaluation:** Experiment walkthrough available on request
> * **Related work:** [Demo Radar: product, architecture, and operations](/en/project/demo-radar)
