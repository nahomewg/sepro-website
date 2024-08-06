ALTER TABLE "options" DROP CONSTRAINT "options_id_questions_id_fk";
--> statement-breakpoint
ALTER TABLE "options" ADD COLUMN "question_id" uuid NOT NULL;--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "options" ADD CONSTRAINT "options_question_id_questions_id_fk" FOREIGN KEY ("question_id") REFERENCES "public"."questions"("id") ON DELETE no action ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
